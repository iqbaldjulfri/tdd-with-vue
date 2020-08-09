import api from '@/lib/api';
import { shallowMount } from '@vue/test-utils';
import LoginPage from './LoginPage';

jest.mock('@/lib/api');
api.login.mockResolvedValue();

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

  describe('when sign in button is clicked', () => {
    it('hits login API and redirects to homepage', async () => {
      const $router = { push: jest.fn() };
      const wrapper = shallowMount(LoginPage, {
        mocks: { $router },
      });
      api.login.mockResolvedValue();

      wrapper.find('#btn-sign-in').trigger('click');
      expect(api.login).toBeCalled();
      await wrapper.vm.$nextTick();
      expect($router.push).toBeCalledWith('home');
    });
    it.todo('shows error when API hit throws error');
    it.todo('shows error when username is empty');
    it.todo('shows error when password is empty');
  });
});
