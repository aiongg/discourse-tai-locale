import { withPluginApi } from 'discourse/lib/plugin-api';
import { default as discourseComputed } from "discourse-common/utils/decorators";

export default {
  name: 'tai_locale',
  initialize(container) {
    const siteSettings = container.lookup("site-settings:main");

    if (!siteSettings.tai_locale_disable_others) return;
    
    withPluginApi('0.11.1', api => {
      api.modifyClass('controller:preferences/interface', {
        @discourseComputed()
        availableLocales() {
            return [
                { value: 'en', name: 'English' },
                { value: 'tai_Han', name: '台語（漢字）'},
                { value: 'tai_Rom', name: 'Tâi-gí (Lô-jī)'}
            ]
        }
      });
    });
  }
}