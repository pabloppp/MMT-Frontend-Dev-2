import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate() {
      let {identification, password} = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },
    authenticate_fb() {
      this.get('session').authenticate('authenticator:torii', 'facebook-oauth2').catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    },
    authenticate_twitter() {
      this.get('session').authenticate('authenticator:torii', 'twitter-oauth1').catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
