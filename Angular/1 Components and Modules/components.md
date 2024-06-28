An Angular application starts executing from the angular.json file which defines all the standards and paths of the application.
It also defines which ‘main file’ and ‘index file’ to execute
   a. when we run the application in browser Angular adds some <script></script> files to index.html.
      in index.html there will be main.js file which is same as main.ts file in our project and it has the information of 
      root module and root module has the info of root component.
   b. Root module is app.module.ts file and it has the info of all the components, modules, services of that module and root component of that module.
      components are present in declarations array.
      modules are present in imports array like httpModule, formsModule etc.
      services are present in providers array
      root comp is present in bootstrap array.
   c. selectors in component.              usage of selector in html
      selector : 'app-root'                <app-root></app-root>
      selector : '.app-root'               <div class="app-root"></div> class selector
      selector : '[app-root]'              <div app-root></div>  attribute selector.
      In css for attribute selection we use [] e.g, input[type =" text"] type is an attribute.
                                                      