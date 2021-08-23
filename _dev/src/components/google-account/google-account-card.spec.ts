/**
 * @jest-environment jsdom
 */

// Import this file first to init mock on window
import {mount} from '@vue/test-utils';
import config from '@/../tests/init';
import {
  Disabled,
  NotConnectedAndNoAuthenticationUrlYet,
  NotConnectedAndCanNotGetAuthenticationUrl,
  NotConnected,
  CouldNotConnect,
  Connected,
} from '@/../stories/google-account-card.stories';

import GoogleAccountCard from '@/components/google-account/google-account-card.vue';

describe('google-account-card.vue', () => {
  let mockRouter;

  beforeEach(() => {
    mockRouter = {go: jest.fn()};
  });

  it('card is greyed when disabled', () => {
    const wrapper = mount(GoogleAccountCard, {
      ...config,
      propsData: Disabled.args,
    });

    expect(wrapper.find('.ps_gs-onboardingcard--disabled-grey').exists()).toBeTruthy();
  });

  it('card isn\'t greyed when enabled', () => {
    const wrapper = mount(GoogleAccountCard, {
      ...config,
      propsData: NotConnected.args,
    });

    expect(wrapper.find('.ps_gs-onboardingcard--disabled-grey').exists()).toBeFalsy();
  });

  it('refresh button available when there is an API error and calls refresh function', async () => {
    const wrapper = mount(GoogleAccountCard, {
      mocks: {
        $router: mockRouter,
      },
      ...config,
      propsData: NotConnectedAndCanNotGetAuthenticationUrl.args,
    });

    // Check if refresh button exists
    expect(wrapper.find('[data-test-id="btn-refresh"]').exists()).toBeTruthy();

    // Check if $router.go() has been called when refresh btn is clicked
    await wrapper.find('[data-test-id="btn-refresh"]').trigger('click');
    expect(mockRouter.go).toHaveBeenCalledTimes(1);
  });

  it('warning visible and connect button not disabled when couldn\'t connect', () => {
    const wrapper = mount(GoogleAccountCard, {
      ...config,
      propsData: CouldNotConnect.args,
    });
    // Check if alert is visible
    expect(wrapper.find('.alert').exists()).toBeTruthy();

    // Check if connect button exists and is not disabled
    expect(wrapper.find('[data-test-id="btn-connect"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test-id="btn-connect"]').attributes('disabled')).toBeFalsy();
  });

  it('account email visible when connected', () => {
    const wrapper = mount(GoogleAccountCard, {
      ...config,
      propsData: Connected.args,
    });
    // Check if account email is visible, the email is defined in the mock
    expect(wrapper.find('a > strong').text()).toBe('v.godard@maisonroyer.com');
  });
});
