const localConfiguration = {
    defaultLocale: 'en-US',
    options:[
        {
            locale:'en-GB',
            name:'English (GB)',
            formats:{
                shortDate:'MM DD, YYYY',
                longDate: 'MMMM DD, YYYY',
                currency:'EUR'
            },
        },
        {
            locale:'en-US',
            name:'English (US)',
            formats:{
                shortDate:'MM DD, YYYY',
                longDate: 'MMMM DD, YYYY',
                currency:'USD'
            },
        }
    ]
}

 const getLocalConfiguration = (locale,
    localConfig) =>{
    const[selectedLocale]  =    localConfig.options.fiter((o)=>{
            o.locale.toLowserCase() === locale.toLowerCase()
        })

        return selectedLocale;
}

const data = getLocalConfiguration('en-GB',localConfiguration);
console.log(data)