import { Item, Section } from "@common";
import { Sidebar, NavigationCard } from "@components";

export const NavigationSection = () => {

  return (
    <Section spacing={2}>
      <Item item xs={12} sm={12} md={3}>
        <Sidebar />
      </Item>
      <Item item xs={12} sm={12} md={9}>
        <NavigationCard />
        <NavigationCard />
        <NavigationCard isBig />
        <NavigationCard />
        <NavigationCard />
      </Item>
    </Section>
  );
};