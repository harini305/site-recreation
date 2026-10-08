import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/Heading";
import { Button, ButtonRow } from "@/components/ui/Button";
import { Tabs } from "@/components/ui/Tabs";
import { Backdrop, DailyRows } from "@/components/sections/Blocks";
import { CardGrid, MediaCard } from "@/components/sections/Cards";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { scheduleNote, weeklySchedule, yogaStyles } from "@/content/yoga";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import styles from "./schedule.module.css";

export const metadata = pageMetadata({
  title: "Weekly Yoga Schedule",
  description:
    "The weekly yoga schedule at Samadi Canggu — Vinyasa, Hatha, Yin Yang, breathwork, sound healing and beginner classes. Book each class on Megatix.",
  path: "/yoga/schedule",
  image: "yoga/class-6",
});

export default function SchedulePage() {
  const totalClasses = weeklySchedule.reduce((n, d) => n + d.classes.length, 0);
  return (
    <>
      <PageHero
        variant="contained"
        image="yoga/class-6"
        eyebrow="Wellness & Yoga Schedules in Samadi Canggu"
        title="Weekly Yoga Schedule"
        crumbs={[
          { name: "Yoga", path: "/yoga" },
          { name: "Schedule", path: "/yoga/schedule" },
        ]}
        lead={`${totalClasses} classes a week, seven days a week — find your class and book it in a few taps.`}
      />

      <Backdrop image="yoga/class-12" labelledBy="schedule-title">
        <div className={styles.card}>
          <SectionHeading id="schedule-title" layout="center" eyebrow="Daily Schedule" title="Your Week at Samadi" />
          <Tabs
            label="Days of the week"
            align="center"
            startOnToday
            items={weeklySchedule.map((d) => ({
              id: d.day.toLowerCase(),
              label: d.day,
              content: (
                <DailyRows
                  rows={d.classes.map((c) => ({
                    value: c.time,
                    label: c.name,
                    sub: `with ${c.teacher}`,
                    href: c.href,
                  }))}
                  note={scheduleNote}
                />
              ),
            }))}
          />
          <ButtonRow center className="mt-m">
            <Button href={site.bookingHref} variant="brand">
              All classes on Megatix
            </Button>
            <Button href={site.whatsappHref} variant="outline" icon="whatsapp">
              Ask on WhatsApp
            </Button>
          </ButtonRow>
        </div>
      </Backdrop>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Yoga Class in Canggu" title="Your Sanctuary for Growth and Wellness">
            <p>
              Whether you’re a beginner or a seasoned practitioner, our wide range of yoga styles caters to all levels,
              offering the perfect environment to nurture your mind, body, and spirit.
            </p>
          </SectionHeading>
          <CardGrid cols={3}>
            {yogaStyles.slice(0, 3).map((s) => (
              <MediaCard key={s.name} image={s.image} title={`${s.name} Class`} ratio="4 / 3">
                <p>{s.text}</p>
              </MediaCard>
            ))}
          </CardGrid>
          <ButtonRow center className="mt-l">
            <Button href="/yoga#prices" variant="brand">
              Prices & passes
            </Button>
            <Button href="/yoga/teachers" variant="outline">
              Meet the teachers
            </Button>
          </ButtonRow>
        </div>
      </section>

      <ClosingCta message="Hi Samadi! I’d like to book a yoga class." />
    </>
  );
}
