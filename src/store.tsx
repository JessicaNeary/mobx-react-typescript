import { observable } from 'mobx'
import { Item, Supplier, SupplierData } from './interfaces'

const dummyService = {
  id: 50001,
  name: 'Grand Presidential Suite',
  text: 'Light and spaceous room',
  supplierId: 10001,
  image: 'http://placehold.it/150x150'
}

export class AppState {
    data: Supplier = new Supplier(dummySupplier)
}

const dummySupplier:SupplierData = {
  "id":1183,
  "name":"Almyra Waterfront Apartment",
  "host":"Fiona and Ron",
  "street":"193 Kina Peninsula Road",
  "city":"Kina Peninsula",
  "region":"Abel Tasman",
  "state":"South Island",
  "country":"New Zealand",
  "phone":"+64 (0)3 526 6840 ",
  "mobilePhone":"+64 (0)21 232 6089",
  "email":"fiona.oliver@xtra.co.nz",
  "website":"www.almyrawaterfrontlodge.co.nz",
  "postAddress":"ETA doorgeven bij boeking of waar klant vandaan komt ",
  "comments":"021116RJ: Rate 2bedr updated as per email 311016RNZ - requested 1bedr rates\r\n311016RK: send $700 rate to ratesnz for 2bedr quad 2018\r\n051016RJ: Rates updated as per email 290716\r\n290716RJ: Commission decreased to 20% as they never agreed to work on 25% and only accept bookings at 20\r\n040814FZ:: Rates updated as per email 030814\r\n171212FZ:: Gesproken en ook happy met de 2/3 deal!, deals only for the Tasman suite!\r\n\r\n",
  "description":"B&B/Hosted\r\n\r\n1.Kina Suite include breakfast provisions for self catering\r\n2.Rates for the Tasman Suite include full breakfast served in-house or continental breakfast served in the Suite \r\n3.All rates include FREE WIFI, use of laundry (subject to conditions), swimming pool (in season), free on-site parking\r\n4.Exceptionally 2 nights stays are allowed in peak season – please enquire\r\n5.Discounts available for 4 days and more – please enquire\r\n6.No children under 16 accepted\r\n7.No pets.  Non-smoking environment\r\n8.Commission payable to Agent – to be agreed\r\n9.Cancellation terms:  50% if cancelled within 30 days; 100% if cancelled within 48 hours.\r\n10.Payment terms: Payment in full 7 days before guests arrival unless previously agreed.\r\n11.No GST payable\r\n\r\nPlease note: We encourage our guests & travel consultants to plan for at least a 3 night stay at Almyra at Kina (if at all possible) in order to fully appreciate the beauty and special qualities of this stunning region & all it has to offer. ",
  "grade1":"",
  "grade2":"",
  "active":true,
  "services":[
    {
      "id":2693,
      "name":"Self contained apartment ",
      "type":"Accommodation",
      "currency":"NZD",
      "deleted":true
    },
    {
      "id":2722,
      "name":"Tasman Suite",
      "type":"Accommodation",
      "currency":"NZD",
      "deleted":true
    },
    {"id":4381,
      "name":"One Bedroom Apartment",
      "type":"Accommodation",
      "currency":"NZD"
    },
    {
      "id":4382,
      "name":"Two Bedroom Apartment",
      "type":"Accommodation",
      "currency":"NZD"
    },
    {
      "id":6005,
      "name":"King Suite (Tasman Suite) ",
      "type":"Accommodation",
      "currency":"NZD",
      "deleted":true
    },
    {
      "id":6761,
      "name":"Estuary Room",
      "type":"Accommodation",
      "currency":"NZD",
      "deleted":true
    },
    {
      "id":6763,
      "name":"King Suite 2 (Estuary Room)",
      "type":"Accommodation",
      "currency":"NZD",
      "deleted":true
    }
  ]
}
