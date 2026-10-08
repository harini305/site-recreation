import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageHero
      variant="center"
      image="yoga/class-11"
      eyebrow="404"
      title="This Path Leads Nowhere — Yet"
      lead="The page you’re looking for has moved or no longer exists. Take a breath and start again from one of these."
      actions={
        <>
          <Button href="/" size="l">
            Back to home
          </Button>
          <Button href="/yoga/schedule" variant="glass" size="l">
            Yoga schedule
          </Button>
          <Button href="/contact" variant="glass" size="l">
            Contact us
          </Button>
        </>
      }
    />
  );
}
