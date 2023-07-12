import loginPage from '../../support/pages/loginPage/index.js';
import inventoryPage from '../../support/pages/inventoryPage/index.js';

describe('Tests for the Item order in the inventory page', () => {

    beforeEach('Goes to Login Page and logs in', () => {
        loginPage.visitLoginPage();
        loginPage.fillCredentialsAndLogin('standard_user', 'secret_sauce');
    })

    it('Items should be sorted to A-Z', () => {
        inventoryPage.selectOrderByText('az');
        inventoryPage.assertProductsAreOrderedAlphabetically();      
    })

    it('Items should be sorted to Z-A', () => {
        inventoryPage.selectOrderByText('za');
        inventoryPage.assertProductsAreOrderedAlphabeticallyReversed();
    })
    
})