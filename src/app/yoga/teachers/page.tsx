import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { TeacherDirectory } from "@/components/sections/TeacherDirectory";
import { SplitFeature } from "@/components/sections/Blocks";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { teachers } from "@/content/teachers";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Yoga Teachers in Canggu",
  description:
    "Meet the Samadi Bali yoga teachers — local Indonesian and international instructors teaching Vinyasa, Hatha, Yin, Ashtanga, FlyHigh, breathwork and sound healing in Canggu.",
  path: "/yoga/teachers",
  image: "yoga/teachers-group",
});

export default function TeachersPage() {
  return (
    <>
      <PageHero
        variant="contained"
        image="yoga/shein-class"
        eyebrow="Our Teachers"
        title="Samadi Bali Yoga Teachers in Canggu"
        crumbs={[
          { name: "Yoga", path: "/yoga" },
          { name: "Teachers", path: "/yoga/teachers" },
        ]}
      />

      <section className="section pt-0">
        <div className="container">
          <SectionHeading title="Meet Our Teachers">
            <p>
              A mix of talented local Indonesians and international instructors, bringing a wealth of knowledge and
              different perspectives to every class — from dynamic Vinyasa to restorative Yin.
            </p>
          </SectionHeading>
          <TeacherDirectory teachers={teachers} />
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <SplitFeature image="yoga/teachers-group" eyebrow="Healing & Renewal" title="More Than Instruction" reverse>
            <p>
              As a centre dedicated to healing and renewal, Samadi Bali offers a tranquil and nurturing environment for
              the nourishment of body, mind, and soul, right in the heart of Canggu.
            </p>
            <p>
              Our teachers work closely with students so that each individual’s journey is supported — whether you are
              seeking physical improvement or spiritual connection. They create a space for community, learning, and
              inner peace.
            </p>
          </SplitFeature>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I have a question about your teachers and classes." />
    </>
  );
}
