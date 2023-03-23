export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage?: (value: SelectedPage) => void;
}
