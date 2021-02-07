export class MenuModel{

   public menuItems:any[]=[
      {
        menuLabel: 'Dashboard',
        routingPath: 'dashboard',
        hasChild:false,
        iconName: 'dashboard'
      },
      {
        menuLabel: 'Items',
        routingPath: 'dashboard',
        hasChild:false,
        iconName: 'dashboard'
      },
      {
        menuLabel: 'Parties',
        hasChild:true,
        iconName: 'insights',
        childConfig:[
          {
             menuLabel: 'Credit',
             routingPath: '/admin-panel/parties/credit'
          },
          {
            menuLabel: 'Cash',
            routingPath: '/admin-panel/parties/cash'
          }
        ]
      },
      {
        menuLabel: 'Transactions',
        hasChild:true,
        iconName: 'insights',
        childConfig:[
          {
             menuLabel: 'Credit',
             routingPath: '/admin-panel/transactions/credit'
          },
          {
            menuLabel: 'Cash',
            routingPath: '/admin-panel/transactions/cash'
          }
        ]
      }
   ];
}
