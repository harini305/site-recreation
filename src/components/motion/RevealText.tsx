import { Fragment } from "react";

/**
 * Splits a heading into masked words so MotionProvider can rise them in line by line.
 * Rendered on the server; the plain text stays readable without JavaScript.
 */
export function RevealText({ text }: { text: string }) {
  const words = text.split(/(\s+)/);
  return (
    <span data-reveal-lines="">
      {words.map((w, i) =>
        /^\s+$/.test(w) ? (
          <Fragment key={i}> </Fragment>
        ) : (
          <span className="rw" key={i}>
            <span className="line-inner">{w}</span>
          </span>
        ),
      )}
    </span>
  );
}
