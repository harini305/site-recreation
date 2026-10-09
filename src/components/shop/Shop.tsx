"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import type { ShopCategory, ShopProduct } from "@/content/shop";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { addOne, clearCart, formatIDR, setQty, useCart } from "./cart";
import styles from "./Shop.module.css";

type Sort = "featured" | "price-asc" | "price-desc" | "az";

const PAGE = 24;
const rank = (p: ShopProduct) => Number(p.inStock) * 2 + Number(Boolean(p.image));

export function Shop({ products, categories }: { products: ShopProduct[]; categories: ShopCategory[] }) {
  const cart = useCart();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<Sort>("featured");
  const [inStockOnly, setInStockOnly] = useState(true);
  const [visible, setVisible] = useState(PAGE);
  const [open, setOpen] = useState(false);

  const byId = useMemo(() => new Map(products.map((p) => [p.id, p])), [products]);
  const labels = useMemo(() => new Map(categories.map((c) => [c.slug, c.label])), [categories]);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = products.filter(
      (p) =>
        (category === "all" || p.category === category) &&
        (!inStockOnly || p.inStock) &&
        (!q || p.name.toLowerCase().includes(q)),
    );
    // "Featured": in stock with a photo first, then the store's own order
    const sorted = [...list];
    if (sort === "price-asc") sorted.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") sorted.sort((a, b) => b.price - a.price);
    else if (sort === "az") sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => rank(b) - rank(a));
    return sorted;
  }, [products, query, category, sort, inStockOnly]);

  const counts = useMemo(() => {
    const m = new Map<string, number>();
    for (const p of products) if (!inStockOnly || p.inStock) m.set(p.category, (m.get(p.category) ?? 0) + 1);
    return m;
  }, [products, inStockOnly]);

  const lines = Object.entries(cart).flatMap(([id, qty]) => {
    const product = byId.get(id);
    return product ? [{ product, qty }] : [];
  });
  const itemCount = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce((n, l) => n + l.qty * l.product.price, 0);

  // Filters reset the "show more" window
  const filter = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    setVisible(PAGE);
  };

  return (
    <>
      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span className="visually-hidden">Search products</span>
          <SearchIcon />
          <input
            type="search"
            value={query}
            onChange={(e) => filter(setQuery)(e.target.value)}
            placeholder="Search 700+ organic products…"
            autoComplete="off"
          />
        </label>
        <label className={styles.select}>
          <span className="visually-hidden">Sort products</span>
          <select value={sort} onChange={(e) => filter(setSort)(e.target.value as Sort)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
            <option value="az">Name: A – Z</option>
          </select>
          <Icon name="chevronDown" size={16} />
        </label>
        <label className={styles.toggle}>
          <input type="checkbox" checked={inStockOnly} onChange={(e) => filter(setInStockOnly)(e.target.checked)} />
          <span>In stock only</span>
        </label>
        <button type="button" className={styles.basketBtn} onClick={() => setOpen(true)}>
          <Icon name="basket" size={20} />
          <span>Basket</span>
          {itemCount > 0 && <span className={styles.badge}>{itemCount}</span>}
        </button>
      </div>

      <div className={styles.chips} role="group" aria-label="Shop by aisle">
        {[{ slug: "all", label: "All products" }, ...categories].map((c) => {
          const n = c.slug === "all" ? undefined : (counts.get(c.slug) ?? 0);
          if (n === 0) return null;
          return (
            <button
              key={c.slug}
              type="button"
              className={styles.chip}
              aria-pressed={category === c.slug}
              onClick={() => filter(setCategory)(c.slug)}
            >
              {c.label}
              {n !== undefined && <span>{n}</span>}
            </button>
          );
        })}
      </div>

      <p className={styles.count} aria-live="polite">
        {shown.length === 0
          ? "No products match your search."
          : `Showing ${Math.min(visible, shown.length)} of ${shown.length} products`}
      </p>

      <ul role="list" className={styles.grid}>
        {shown.slice(0, visible).map((p) => (
          <li key={p.id}>
            <ProductCard product={p} aisle={labels.get(p.category) ?? ""} qty={cart[p.id] ?? 0} />
          </li>
        ))}
      </ul>

      {visible < shown.length && (
        <div className={styles.more}>
          <button type="button" className={styles.moreBtn} onClick={() => setVisible((v) => v + PAGE)}>
            Show more products
          </button>
        </div>
      )}

      {itemCount > 0 && !open && (
        <button type="button" className={styles.floating} onClick={() => setOpen(true)}>
          <Icon name="basket" size={20} />
          <span>
            {itemCount} {itemCount === 1 ? "item" : "items"} · {formatIDR(subtotal)}
          </span>
          <span className={styles.floatingCta}>View basket</span>
        </button>
      )}

      <Basket open={open} onClose={() => setOpen(false)} lines={lines} subtotal={subtotal} />
    </>
  );
}

function ProductCard({ product: p, aisle, qty }: { product: ShopProduct; aisle: string; qty: number }) {
  return (
    <article className={cn(styles.card, !p.inStock && styles.soldOut)} data-card="">
      <div className={cn(styles.photo, "img-zoom")}>
        {p.image ? (
          <Image
            src={p.image}
            alt={p.name}
            fill
            sizes="(max-width: 599px) 46vw, (max-width: 1023px) 31vw, 280px"
            quality={75}
          />
        ) : (
          <span className={styles.noPhoto} aria-hidden="true">
            <Icon name="leaf" size={34} />
          </span>
        )}
        {!p.inStock && <span className={styles.flag}>Sold out</span>}
      </div>
      <div className={styles.cardBody}>
        <p className={styles.aisle}>{aisle}</p>
        <h3 className={styles.name}>{p.name}</h3>
        <p className={styles.price}>
          {formatIDR(p.price)}
          {p.was && <s>{formatIDR(p.was)}</s>}
        </p>
        <div className={styles.cardAction}>
          {!p.inStock ? (
            <span className={styles.unavailable}>Currently unavailable</span>
          ) : qty > 0 ? (
            <Stepper id={p.id} name={p.name} qty={qty} />
          ) : (
            <button type="button" className={styles.add} onClick={() => addOne(p.id)}>
              <Icon name="plus" size={16} /> Add to basket
            </button>
          )}
        </div>
      </div>
    </article>
  );
}

function Stepper({ id, name, qty }: { id: string; name: string; qty: number }) {
  return (
    <div className={styles.stepper} role="group" aria-label={`Quantity of ${name}`}>
      <button type="button" onClick={() => setQty(id, qty - 1)} aria-label={`Remove one ${name}`}>
        −
      </button>
      <span aria-live="polite">{qty}</span>
      <button type="button" onClick={() => setQty(id, qty + 1)} aria-label={`Add one more ${name}`}>
        +
      </button>
    </div>
  );
}

type Line = { product: ShopProduct; qty: number };

function Basket({
  open,
  onClose,
  lines,
  subtotal,
}: {
  open: boolean;
  onClose: () => void;
  lines: Line[];
  subtotal: number;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [method, setMethod] = useState<"delivery" | "pickup">("delivery");

  const close = useCallback(() => onClose(), [onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.setTimeout(() => closeRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const send = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (k: string) => String(data.get(k) ?? "").trim();
    const details = [
      `Name: ${field("name")}`,
      method === "delivery" ? `Delivery to: ${field("address")}` : "Pick up at Samadi, Jalan Padang Linjong 39",
      field("when") && `Preferred time: ${field("when")}`,
      field("note") && `Note: ${field("note")}`,
    ].filter(Boolean);
    const message = [
      "Hi Samadi Supermarket! I’d like to place an order from the online shop:",
      lines.map((l) => `• ${l.qty} × ${l.product.name} — ${formatIDR(l.qty * l.product.price)}`).join("\n"),
      `Subtotal: ${formatIDR(subtotal)}`,
      details.join("\n"),
    ].join("\n\n");
    window.open(`https://wa.me/${site.marketWhatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  };

  return (
    <div className={styles.drawerRoot} data-open={open}>
      <div className={styles.backdrop} onClick={close} aria-hidden="true" />
      <aside className={styles.drawer} role="dialog" aria-modal="true" aria-labelledby="basket-title" inert={!open}>
        <header className={styles.drawerHead}>
          <h2 id="basket-title">Your basket</h2>
          <button ref={closeRef} type="button" className={styles.close} onClick={close} aria-label="Close basket">
            <Icon name="close" size={20} />
          </button>
        </header>

        {lines.length === 0 ? (
          <div className={styles.empty}>
            <Icon name="basket" size={40} />
            <p>Your basket is empty.</p>
            <button type="button" className={styles.moreBtn} onClick={close}>
              Browse products
            </button>
          </div>
        ) : (
          <form className={styles.checkout} onSubmit={send}>
            <ul role="list" className={styles.lines}>
              {lines.map(({ product: p, qty }) => (
                <li key={p.id} className={styles.line}>
                  <div className={styles.lineImg}>
                    {p.image ? (
                      <Image src={p.image} alt="" fill sizes="64px" quality={75} />
                    ) : (
                      <Icon name="leaf" size={22} />
                    )}
                  </div>
                  <div className={styles.lineInfo}>
                    <p className={styles.lineName}>{p.name}</p>
                    <p className={styles.linePrice}>{formatIDR(p.price * qty)}</p>
                    <div className={styles.lineControls}>
                      <Stepper id={p.id} name={p.name} qty={qty} />
                      <button type="button" className={styles.remove} onClick={() => setQty(p.id, 0)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className={styles.total}>
              <span>Subtotal</span>
              <strong>{formatIDR(subtotal)}</strong>
            </div>
            <p className={styles.fine}>Delivery fee and final availability are confirmed by the market team.</p>

            <fieldset className={styles.method}>
              <legend>How would you like to receive it?</legend>
              <label>
                <input
                  type="radio"
                  name="method"
                  checked={method === "delivery"}
                  onChange={() => setMethod("delivery")}
                />
                Delivery
              </label>
              <label>
                <input type="radio" name="method" checked={method === "pickup"} onChange={() => setMethod("pickup")} />
                Pick up in Canggu
              </label>
            </fieldset>

            <label className={styles.field}>
              <span>Your name</span>
              <input name="name" required autoComplete="name" />
            </label>
            {method === "delivery" && (
              <label className={styles.field}>
                <span>Delivery address</span>
                <textarea name="address" required rows={2} autoComplete="street-address" />
              </label>
            )}
            <label className={styles.field}>
              <span>Preferred day & time (optional)</span>
              <input name="when" placeholder="e.g. Tomorrow morning" />
            </label>
            <label className={styles.field}>
              <span>Note for the team (optional)</span>
              <textarea name="note" rows={2} />
            </label>

            <button type="submit" className={styles.send}>
              <Icon name="whatsapp" size={20} /> Send order on WhatsApp
            </button>
            <button type="button" className={styles.clear} onClick={clearCart}>
              Empty basket
            </button>
          </form>
        )}
      </aside>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}
