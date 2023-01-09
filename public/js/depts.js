// list of all departments, their staff and passwords
const departments = {
    'group-leads': {
        'benc':{'password':'benc2022','lead':'benc','group':'benc'},
        'chrisf':{'password':'chri2022','lead':'chrisf','group':'chrisf'},
        'chuckc':{'password':'chuc2022','lead':'chuckc','group':'chuckc'},
        'clayp':{'password':'clay2022','lead':'clayp','group':'clayp'},
        'crysl':{'password':'crys2022','lead':'crysl','group':'crysl'},
        'erikap':{'password':'erik2022','lead':'erikap','group':'erikap'},
        'jasonr':{'password':'jaso2022','lead':'jasonr','group':'jasonr'},
        'kristinr':{'password':'kris2022','lead':'kristinr','group':'kristinr'},
        'kyled':{'password':'kyle2022','lead':'kyled','group':'kyled'},
        'steved':{'password':'stev2022','lead':'steved','group':'steved'},
        'tammyl':{'password':'tamm2022','lead':'tammyl','group':'tammyl'},
    },
    'team-leads': {
        'alexr':{'password':'alex2022','lead':'tammyl','group':'tammyl'},
        'bradl':{'password':'bral2022','lead':'clayp','group':'clayp'},
        'bradp':{'password':'brap2022','lead':'chrisf','group':'chrisf'},
        'bryans':{'password':'brya2022','lead':'tammyl','group':'tammyl'},
        'daves':{'password':'dave2022','lead':'chrisf','group':'chrisf'},
        'darrenp':{'password':'darr2022','lead':'jasonr','group':'jasonr'},
        'debbieh':{'password':'debb2022','lead':'tammyl','group':'tammyl'},
        'jamiel':{'password':'jami2022','lead':'benc','group':'benc'},
        'johannad':{'password':'joha2022','lead':'erikap','group':'erikap'},
        'justink':{'password':'just2022','lead':'jasonr','group':'jasonr'},
        'michaelm':{'password':'madr2022','lead':'kyled','group':'kyled'},
        'michelem':{'password':'mich2022','lead':'kristinr','group':'kristinr'},
        'mikel':{'password':'mike2022','lead':'clayp','group':'clayp'},
        'morganr':{'password':'morg2022','lead':'kyled','group':'kyled'},
        'patb':{'password':'patb2022','lead':'jasonr','group':'jasonr'},
        'sams':{'password':'sams2022','lead':'benc','group':'benc'},
        'shannona':{'password':'shan2022','lead':'crysl','group':'crysl'},
        'steves':{'password':'stev2022','lead':'kristinr','group':'kristinr'}
    },
    'admin-IG': {
        'sarahw':{'password':'sara2022','lead':'debbieh','group':'tammyl'},
        'tabithap':{'password':'tabi2022','lead':'debbieh','group':'tammyl'}
    },
    'admin-IWS': {
        'lindal':{'password':'lind2022','lead':'johannad','group':'erikap'},
        'nicolem':{'password':'nico2022','lead':'johannad','group':'erikap'},
        'rachelw':{'password':'rach2022','lead':'johannad','group':'erikap'}
    },
    'accounting-IG': {
        'elianaw':{'password':'elia2022','lead':'erikap','group':'erikap'},
        'katieh':{'password':'kati2022','lead':'erikap','group':'erikap'},
        'kristim':{'password':'kris2022','lead':'erikap','group':'erikap'},
        'logand':{'password':'loga2022','lead':'erikap','group':'erikap'}
    }, 
    'assembly': {
        'bertc':{'password':'bert2022','lead':'steves','group':'kristinr'},
        'kaitlynl':{'password':'kait2022','lead':'steves','group':'kristinr'},
        'kayleenm':{'password':'kayl2022','lead':'steves','group':'kristinr'},
        'myronm':{'password':'myro2022','lead':'steves','group':'kristinr'}
    },
    'engineering': {
        'aaronm':{'password':'aaro2022','lead':'crysl','group':'crysl'},
        'andrewv':{'password':'andr2022','lead':'crysl','group':'crysl'},
        'christianh':{'password':'chri2022','lead':'crysl','group':'crysl'},
        'jakew':{'password':'jake2022','lead':'crysl','group':'crysl'},
        'kylem':{'password':'kyle2022','lead':'crysl','group':'crysl'},
        'wyattu':{'password':'wyat2022','lead':'crysl','group':'crysl'},
    },  
    'hand-weld': {
        'alexq':{'password':'alex2022','lead':'darrenp','group':'jasonr'},
        'jeremyl':{'password':'jere2022','lead':'darrenp','group':'jasonr'},
        'rickyk':{'password':'rick2022','lead':'darrenp','group':'jasonr'},
        'stoufferc':{'password':'stou2022','lead':'darrenp','group':'jasonr'}
    },
    'H.R.S.': {
        'abramh':{'password':'abra2022','lead':'bradp','group':'chrisf'},
        'codyh':{'password':'cody2022','lead':'bradp','group':'chrisf'}
    }, 
    'info-tech': {
        'fernandof':{'password':'fern2022','lead':'brayans','group':'tammyl'}
    },
    'machining': {
        'angelak':{'password':'ange2022','lead':'justink','group':'jasonr'},
        'brandong':{'password':'bran2022','lead':'justink','group':'jasonr'},
        'tonys':{'password':'tony2022','lead':'justink','group':'jasonr'}
    }, 
    'marketing': {
        'amandar':{'password':'aman2022', 'lead':'benc','group':'benc'},
        'christianc':{'password':'chri2022','lead':'benc','group':'benc'},
        'diegod':{'password':'dieg2022','lead':'benc','group':'benc'},
        'milob':{'password':'milo2022','lead':'benc','group':'benc'},
        'printshop':{'password':'Vcxz432@','lead':'benc','group':'benc'}
    }, 
    'night-shift': {
        'kiml':{'password':'kiml2022','lead':'bradl','group':'clayp'},
        'bent':{'password':'bent2022','lead':'bradl','group':'clayp'},
        'shawnf':{'password':'shaw2022','lead':'bradl','group':'clayp'},
        'jacquec':{'password':'jacq2022','lead':'bradl','group':'clayp'},
        'spencert':{'password':'spen2022','lead':'bradl','group':'clayp'},
        'lukem':{'password':'luke2022','lead':'bradl','group':'clayp'}
    }, 
    'performance-tech': {
        'guyk':{'password':'guyk2022','lead':'chrisf','group':'chrisf'},
        'darinb':{'password':'dari2022','lead':'chrisf','group':'chrisf'},
        'markb':{'password':'mark2022','lead':'chrisf','group':'chrisf'},
        'michaelm':{'password':'mich2022','lead':'chrisf','group':'chrisf'}
    },
    'pb-sm-assy': {
        'coltonr':{'password':'colt2022','lead':'michaelm','group':'kyled'},
        'frankies':{'password':'fran2022','lead':'michaelm','group':'kyled'},
        'kyles':{'password':'kyle2022','lead':'michaelm','group':'kyled'},
        'riattar':{'password':'riat2022','lead':'michaelm','group':'kyled'},
        'samc':{'password':'samc2022','lead':'michaelm','group':'kyled'}
    },
    'powder-coating': {
        'ianh':{'password':'ianh2022','lead':'shannona','group':'crysl'},
        'jakeb':{'password':'jake2022','lead':'shannona','group':'crysl'}
    }, 
    'purchasing': {
        'amberh':{'password':'ambe2022', 'lead':'kyled','group':'erikap'},
        'deronp':{'password':'dero2022', 'lead':'kyled','group':'erikap'},
        'jamesr':{'password':'jame2022', 'lead':'kyled','group':'erikap'},
        'jasong':{'password':'jaso2022', 'lead':'kyled','group':'erikap'}
    },
    'robot': {
        'kadinp':{'password':'kodi2022','lead':'patb','group':'jasonr'},
        'robertt':{'password':'robe2022','lead':'patb','group':'jasonr'},
    },
    'rv-service': {
        'jayb':{'password':'jayb2022','lead':'daves','group':'chrisf'},
        'luisc':{'password':'luis2022','lead':'daves','group':'chrisf'},
    },
    'sales-IG': {
        'brandonj':{'password':'bran2022','lead':'alexr','group':'tammyl'},
        'jamesl':{'password':'jame2022','lead':'alexr','group':'tammyl'},
        'staceyc':{'password':'stac2022','lead':'alexr','group':'tammyl'}        
    }, 
    'sales-IWS': {
        'deane':{'password':'dean2022','lead':'sams','group':'benc'},
        'heathern':{'password':'heat2022','lead':'sams','group':'benc'},
        'marshallc':{'password':'mars2022','lead':'sams','group':'benc'},
        'martyl':{'password':'mart2022','lead':'sams','group':'benc'}
    }, 
    'scheduling-nesting': {
        'seang':{'password':'sean2022','lead':'morganr','group':'kyled'},
        'destinyl':{'password':'dest2022','lead':'morganr','group':'kyled'},
        'tairanb':{'password':'tair2022','lead':'morganr','group':'kyled'}
    },
    'service-IWS': {
        'joek':{'password':'joek2022','lead':'jamiel','group':'benc'},
        'markh':{'password':'mark2022','lead':'jamiel','group':'benc'}
    },
    'shipping-packing': {
        'masong':{'password':'maso2022','lead':'michelem','group':'kristinr'},
        'gingerb':{'password':'ging2022','lead':'michelem','group':'kristinr'},
        'jone':{'password':'jone2022','lead':'michelem','group':'kristinr'}
    },
    'tube-fab': {
        'gregm':{'password':'greg2022','lead':'justink','group':'jasonr'},
        'tommyg':{'password':'tomm2022','lead':'justink','group':'jasonr'}
    }
};
