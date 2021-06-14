/**
 * 2007-2021 PrestaShop and Contributors
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License 3.0 (AFL-3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * https://opensource.org/licenses/AFL-3.0
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@prestashop.com so we can send you a copy immediately.
 *
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2007-2021 PrestaShop SA and Contributors
 * @license   https://opensource.org/licenses/AFL-3.0 Academic Free License 3.0 (AFL-3.0)
 * International Registered Trademark & Property of PrestaShop SA
 */

enum MutationsTypes {
    SAVE_GOOGLE_ACCOUNT_TOKEN = 'SAVE_GOOGLE_ACCOUNT_TOKEN',
    SET_GOOGLE_ACCOUNT = 'SET_GOOGLE_ACCOUNT',
    REMOVE_GOOGLE_ACCOUNT = 'REMOVE_GOOGLE_ACCOUNT',
    SAVE_GOOGLE_ACCOUNT_CONNECTED_ONCE = 'SAVE_GOOGLE_ACCOUNT_CONNECTED_ONCE',
    SAVE_GMC_LIST = 'SAVE_GMC_LIST',
    SAVE_GMC = 'SAVE_GMC',
    REMOVE_GMC = 'REMOVE_GMC',
    SAVE_GMC_WEBSITE_VERIFICATION_PROGRESS_STATUS = 'SAVE_GMC_WEBSITE_VERIFICATION_PROGRESS_STATUS',
    SAVE_GMC_WEBSITE_VERIFICATION_STATUS = 'SAVE_GMC_WEBSITE_VERIFICATION_STATUS',
    SET_GOOGLE_AUTHENTICATION_URL = 'SET_GOOGLE_AUTHENTICATION_URL',
    SET_GOOGLE_AUTHENTICATION_RESPONSE = 'SET_GOOGLE_AUTHENTICATION_RESPONSE',
    SAVE_WEBSITE_CLAIMING_STATUS = 'SAVE_WEBSITE_CLAIMING_STATUS',
    SAVE_WEBSITE_VERIFICATION_AND_CLAIMING_STATUS = 'SAVE_WEBSITE_VERIFICATION_AND_CLAIMING_STATUS',
    SAVE_STATUS_OVERRIDE_CLAIMING = 'SAVE_STATUS_OVERRIDE_CLAIMING',
}

export {MutationsTypes as default};
