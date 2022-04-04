window.addEventListener('load', function () {
    // obtain cookieconsent plugin
    var cookieconsent = initCookieConsent();

    // run plugin with config object
    cookieconsent.run({
        autorun: true,
        current_lang: 'en',
        autoclear_cookies: true,
        page_scripts: true,

        languages: {
            en: {
                consent_modal: {
                    title: 'I use cookies',
                    description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only upon approval. <a aria-label="Cookie policy" class="cc-link" href="/privacy-policy">Read more</a>',
                    primary_btn: {
                        text: 'Accept',
                        role: 'accept_all'              // 'accept_selected' or 'accept_all'
                    },
                    secondary_btn: {
                        text: 'Settings',
                        role: 'settings'                // 'settings' or 'accept_necessary'
                    }
                },
                settings_modal: {
                    title: 'Cookie preferences',
                    save_settings_btn: 'Save settings',
                    accept_all_btn: 'Accept all',
                    reject_all_btn: 'Reject all',       // optional, [v.2.5.0 +]
                    blocks: [
                        {
                            title: 'Cookie usage',
                            description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.'
                        }, {
                            title: 'Strictly necessary cookies',
                            description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly.',
                            toggle: {
                                value: 'necessary',
                                enabled: true,
                                readonly: true
                            }
                        }, {
                            title: 'Analytics cookies',
                            description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you.',
                            toggle: {
                                value: 'analytics',
                                enabled: false,
                                readonly: false
                            }
                        }
                    ]
                }
            }
        }
    });
});