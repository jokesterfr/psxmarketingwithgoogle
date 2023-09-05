import Vuex from 'vuex';

// Import this file first to init mock on window
import {MountOptions, mount} from '@vue/test-utils';
import config, {localVue, cloneStore, addBootstrapToVue} from '@/../tests/init';

import CampaignTableList from './campaign-table-list.vue';
import { campaigns } from '@/../.storybook/mock/campaigns-list';
import { BCard, BSkeleton } from 'bootstrap-vue';
import campaignTableListRowVue from './campaign-table-list-row.vue';
import tableApiErrorVue from '../commons/table-api-error.vue';

const buildDefaultStore = (): ReturnType<typeof cloneStore> => {
  const store = cloneStore();
  store.modules.campaigns.state.campaigns.results.campaigns = campaigns;
  store.modules.campaigns.state.campaigns.results.totalCount = 123;

  store.modules.campaigns.actions.GET_DIMENSIONS_FILTERS = vi.fn();
  store.modules.campaigns.actions.GET_CAMPAIGNS_LIST = vi.fn();
  return store;
}

const buildWrapper = (
  options: MountOptions<any> = {},
  store: ReturnType<typeof cloneStore> = buildDefaultStore(),
) => {
  return mount(CampaignTableList, {
    localVue,
    store: new Vuex.Store(store),
    ...config,
    ...options,
  });
}

describe('CampaignTableList', () => {
  beforeEach(() => {
    addBootstrapToVue();
  });

  describe('Display', () => {
    it('is shown by default', () => {
      const wrapper = buildWrapper({
        propsData: {
          loading: false,
        }
      });

      // Overall card
      expect(wrapper.findComponent(BCard).exists()).toBe(true);

      // Error card
      expect(wrapper.findComponent(tableApiErrorVue).exists()).toBe(false);

      // Loading state
      expect(wrapper.findAllComponents(BSkeleton)).toHaveLength(0);

      // Campaigns data
      const tableRows = wrapper.findAllComponents(campaignTableListRowVue);
      expect(tableRows).toHaveLength(6);
      expect(tableRows.at(2).props('campaign')).toEqual(campaigns[2]);
    });

    it('is shown when campaigns are being fetched', async () => {
      const wrapper = buildWrapper({
        propsData: {
          loading: false,
        }
      });
      await wrapper.setData({
        fetchingCampaigns: true,
      });

      // Overall card
      expect(wrapper.findComponent(BCard).exists()).toBe(true);

      // Error card
      expect(wrapper.findComponent(tableApiErrorVue).exists()).toBe(false);

      // Loading state
      const numberOfCells = (1 + 10) * 11;
      expect(wrapper.findAllComponents(BSkeleton)).toHaveLength(numberOfCells);

      // Campaigns data
      expect(wrapper.findAllComponents(campaignTableListRowVue)).toHaveLength(0);
    });

    it('is shown when API failed', () => {
      const store = buildDefaultStore();
      store.modules.campaigns.state.campaigns.results.error = true;
      store.modules.campaigns.state.campaigns.results.campaigns = [];
      store.modules.campaigns.state.campaigns.results.totalCount = 0;

      const wrapper = buildWrapper({
        propsData: {
          loading: false,
        }
      }, store);

      // Overall card
      expect(wrapper.findComponent(BCard).exists()).toBe(true);

      // Error card
      expect(wrapper.findComponent(tableApiErrorVue).exists()).toBe(true);

      // Loading state
      expect(wrapper.findAllComponents(BSkeleton)).toHaveLength(0);

      // Campaigns data
      expect(wrapper.findAllComponents(campaignTableListRowVue)).toHaveLength(0);
    });

    it('is shown during loading', () => {
      const store = buildDefaultStore();
      store.modules.campaigns.state.campaigns.results.error = true;
      store.modules.campaigns.state.campaigns.results.campaigns = [];
      store.modules.campaigns.state.campaigns.results.totalCount = 0;

      const wrapper = buildWrapper({
        propsData: {
          loading: true,
        }
      }, store);

      // Overall card
      expect(wrapper.findComponent(BCard).exists()).toBe(true);

      // Error card
      expect(wrapper.findComponent(tableApiErrorVue).exists()).toBe(false);

      // Loading state
      const numberOfCells = (1 + 10) * 11;
      expect(wrapper.findAllComponents(BSkeleton)).toHaveLength(numberOfCells);

      // Campaigns data
      expect(wrapper.findAllComponents(campaignTableListRowVue)).toHaveLength(0);
    });

    it('is hidden when there is no campaigns', () => {
      const store = buildDefaultStore();
      store.modules.campaigns.state.campaigns.results.campaigns = [];
      store.modules.campaigns.state.campaigns.results.totalCount = 0;

      const wrapper = buildWrapper({
        propsData: {
          loading: false,
        }
      }, store);

      expect(wrapper.findComponent(BCard).exists()).toBe(false);
    });
  });

  describe('Header', () => {
    it.todo('has the proper number of columns');
    it.todo('has date + performance columns sortable');
    it.todo('adds a background color on performance columns');
  });

  describe('Sorting', () => {
    it.todo('has no sorting by default');
    it.todo('sets as Ascending on first clic');
    it.todo('sets as Descending when current sorting is Ascending');
    it.todo('sets as Ascending when current sorting is Descending');
    it.todo('allows only one column to be sorted')
  });

  describe('Pagination', () => {
    it.todo('should display the pagination controls');
    it.todo('handles an update of the current page');
    it.todo('handles an update of the page size');
    it.todo('calls the API when the parameters are updated');
  });
});
