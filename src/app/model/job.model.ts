export class Job {
  id!: number;
  companyName!: string;
  title!: string;
  companyLogo!: string;
  reference!: string;
  location!: string;
  industries!: [];
  types!: [];
  description!: string;
  publishDate!: string;
  favorited: boolean = false;
}