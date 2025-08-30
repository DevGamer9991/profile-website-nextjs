import { MarketingLayout } from '#components/layout'

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout announcementProps={{title: "Pardon My Mess", description: "This page is a work in progress!", href: "https://parkerthornton.net/"}}>{props.children}</MarketingLayout>
}
