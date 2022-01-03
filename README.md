# DoctorPortal

# Component Design Document
[app-module]
	App.module.ts
	App-routing.module.ts
	App.component.ts
	App.component.html

	[patient-detailsrout-module] (lazy loding module)
		- Patient.module.ts
		- Patient-routing.module.ts
		- Patient.service.ts
		- Patient.model.ts

		[patient-add] (routing component)
			- Patient-add-component.ts
			- Patient-add-component.html
		
        [patient-list] (routing component)
			- Patient-list-component.ts
			- Patient-list-component.html
		
        [patient-view] (routing component)
			- Patient-view-component.ts
			- Patient-view-component.html
		
	[Shared-module]
	[core-module]
		[component]
			[Login]
				- Login.component.ts
				- Login.component.html
			[signup]
				- signup.component.ts
				- signup.component.html
			[logout]
				- logout.component.ts
				- logout.component.html
			[dashbord]
				- dashbord.component.ts
				- dashbord.component.html
			[not-found]
				- not-found.component.ts
				- not-found.component.html
			
			
			
	
	
