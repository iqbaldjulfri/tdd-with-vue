import api from '@/lib/api';
import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import LoginPage from './LoginPage';

jest.mock('@/lib/api');

describe('LoginPage', () => {
  let wrapper;
  const $router = { push: jest.fn() };
  const findBtnSignIn = () => wrapper.find('#btn-sign-in');
  const findMsgError = () => wrapper.find('#msg-error');

  beforeEach(() => {
    wrapper = shallowMount(LoginPage, {
      mocks: { $router },
    });
  });

  describe('when loaded', () => {
    it('has the required elements', () => {
      const findTitle = () => wrapper.find('#title');

      expect(findTitle().exists()).toBe(true);
      expect(findTitle().text()).toBe('Login');
      expect(wrapper.find('#input-username').exists()).toBe(true);
      expect(wrapper.find('#input-password').exists()).toBe(true);
      expect(findBtnSignIn().exists()).toBe(true);
      expect(findBtnSignIn().text()).toBe('Sign In');
      expect(findMsgError().exists()).toBe(false);
    });
  });

  describe('when sign in button is clicked', () => {
    it('hits login API and redirects to homepage', async () => {
      api.login.mockResolvedValue();
      findBtnSignIn().trigger('click');
      expect(api.login).toBeCalled();
      await flushPromises();
      expect($router.push).toBeCalledWith('home');
    });
    it('shows error when API hit throws error', async () => {
      api.login.mockRejectedValue();
      findBtnSignIn().trigger('click');
      expect(api.login).toBeCalled();
      await flushPromises();
      expect(findMsgError().exists()).toBe(true);
      expect(findMsgError().text()).toBe('Login failed');
    });
    it.todo('shows error when username is empty');
    it.todo('shows error when password is empty');
  });
});
