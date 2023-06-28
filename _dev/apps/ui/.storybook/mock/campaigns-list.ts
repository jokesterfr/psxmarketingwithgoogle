import { CampaignObject, CampaignsLists } from "@/store/modules/campaigns/state";

export const campaignsEmpty: CampaignsLists = {
  campaignsList: [],
};

export const onlyPmax: CampaignObject[] = [
  {
    campaignName: "Tartiflette day",
    startDate: "2021-06-20",
    endDate: "2021-11-15",
    targetCountry: "FR",
    dailyBudget: 112,
    status: "ELIGIBLE",
    currencyCode: "EUR",
    productFilters: [],
    type: "PERFORMANCE_MAX",
  },
  {
    campaignName: "Tartiflette day (Pending)",
    startDate: "2021-06-20",
    endDate: "2021-11-15",
    targetCountry: "FR",
    dailyBudget: 112,
    status: "PENDING",
    currencyCode: "EUR",
    productFilters: [],
    type: "PERFORMANCE_MAX",
  },
  {
    campaignName: "Tartiflette day (Paused)",
    startDate: "2021-06-20",
    endDate: "2021-11-15",
    targetCountry: "FR",
    dailyBudget: 112,
    status: "PAUSED",
    currencyCode: "EUR",
    productFilters: [],
    type: "PERFORMANCE_MAX",
  },
  {
    campaignName: "Tartiflette day (Ended)",
    startDate: "2021-06-20",
    endDate: "2021-11-15",
    targetCountry: "FR",
    dailyBudget: 112,
    status: "ENDED",
    currencyCode: "EUR",
    productFilters: [],
    type: "PERFORMANCE_MAX",
  },
  {
    campaignName: "Tartiflette day (Draft)",
    startDate: "2021-06-20",
    endDate: "2021-11-15",
    targetCountry: "FR",
    dailyBudget: 112,
    status: "DRAFT",
    currencyCode: "EUR",
    productFilters: [],
    type: "PERFORMANCE_MAX",
  },
  {
    campaignName: "Tartiflette day (Not eligible)",
    startDate: "2021-06-20",
    endDate: "2021-11-15",
    targetCountry: "FR",
    dailyBudget: 112,
    status: "noteligible",
    currencyCode: "EUR",
    productFilters: [],
    type: "PERFORMANCE_MAX",
  },
];

export const campaigns: CampaignsLists = {
  campaignsList: onlyPmax,
};

export const campaignWithOnlyPmax: CampaignsLists = {
  campaignsList: onlyPmax,
};

export const campaignsListResponse = {
  campaigns: campaigns,
  nextPageToken: "foobar",
};
