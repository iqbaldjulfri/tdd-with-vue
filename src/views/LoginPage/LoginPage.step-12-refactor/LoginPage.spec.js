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
  const findInputUsername = () => wrapper.find('#input-username');
  const findInputPassword = () => wrapper.find('#input-password');

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
      expect(findInputUsername().exists()).toBe(true);
      expect(findInputPassword().exists()).toBe(true);
      expect(findBtnSignIn().exists()).toBe(true);
      expect(findBtnSignIn().text()).toBe('Sign In');
      expect(findMsgError().exists()).toBe(false);
    });
  });

  describe('when sign in button is clicked', () => {
    const fillLoginFieldAndSubmit = async (username, password) => {
      findInputUsername().setValue(username);
      findInputPassword().setValue(password);
      findBtnSignIn().trigger('click');
      await flushPromises();
    };
    const assertErrorMessage = message => {
      expect(findMsgError().exists()).toBe(true);
      expect(findMsgError().text()).toBe(message);
    };

    it('hits login API and redirects to homepage', async () => {
      api.login.mockResolvedValue();
      await fillLoginFieldAndSubmit('test', 'test');
      expect(api.login).toBeCalled();
      expect($router.push).toBeCalledWith('home');
    });
    it('shows error when API hit throws error', async () => {
      api.login.mockRejectedValue();
      await fillLoginFieldAndSubmit('test', 'test');
      expect(api.login).toBeCalled();
      assertErrorMessage('Login failed');
    });
    it('shows error when username or password is empty', async () => {
      await fillLoginFieldAndSubmit('', 'test');
      assertErrorMessage('Username is required');

      await fillLoginFieldAndSubmit('test', '');
      assertErrorMessage('Password is required');
    });
  });
});
