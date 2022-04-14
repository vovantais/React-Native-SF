export const QUERY_PRODUCTS = "SELECT Id, Name, IsActive, Cost__c, Model__c, Price__c, Year__c, Family FROM Product2 WHERE Family='auto' AND IsActive = true";

export const ORDER_BUTTON_TEXT = 'Order';
export const ORDER_SUCCESS = 'Order successful case created in Salesforse!';
export const ORDER_ERROR = 'An error occurred, notify the administrator!';
export const FAILED_AUTHENTICATE = 'Failed to authenticate: '; 
export const ORDER_BUTTON = '#841584';

export const API_URI = 'https://senla-a-dev-ed.my.salesforce.com/services/apexrest/CreateCases';


export const CARS = [
	{
		audi: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbNJneeGXA-K0rz1jpMfJnH9Yt8ukwVZVCw&usqp=CAU',
		buick: 'https://carexpert.ru/img/foto600/buick/buicai001.jpg',
		bmw: 'https://www.pngplay.com/wp-content/uploads/13/BMW-M3-2019-PNG-Photos.png',
		volvo: 'https://www.volvocars.com/media/shared-assets/images/galleries/new-cars/new-xc90/editions/gallery_module_1/gallery1_1_vcc08316.jpg',
		bentley: 'https://cdnimg.rg.ru/img/content/197/82/24/bentley_continental_gt_v8_737_d_850.jpeg'
	}
];