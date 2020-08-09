import { shallowMount } from '@vue/test-utils';
import LoginPage from './LoginPage';

describe('LoginPage', () => {
  describe('when loaded', () => {
    it('has the required elements', () => {
      const wrapper = shallowMount(LoginPage);
      const findTitle = () => wrapper.find('#title');
      const findBtnSignIn = () => wrapper.find('#btn-sign-in');

      expect(findTitle().exists()).toBe(true);
      expect(findTitle().text()).toBe('Login');
      expect(wrapper.find('#input-username').exists()).toBe(true);
      expect(wrapper.find('#input-password').exists()).toBe(true);
      expect(findBtnSignIn().exists()).toBe(true);
      expect(findBtnSignIn().text()).toBe('Sign In');
    });
  });
});
