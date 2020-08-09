import { shallowMount } from '@vue/test-utils';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  describe('when loaded', () => {
    it('has the required elements', () => {
      const wrapper = shallowMount(LoginPage);

      expect(wrapper.find('#title').exists()).toBe(true);
      expect(wrapper.find('#title').text()).toBe('Login');
      expect(wrapper.find('#input-username').exists()).toBe(true);
      expect(wrapper.find('#input-password').exists()).toBe(true);
      expect(wrapper.find('#btn-sign-in').exists()).toBe(true);
      expect(wrapper.find('#btn-sign-in').text()).toBe('Sign In');
    });
  });
});
