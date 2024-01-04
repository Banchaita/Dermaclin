import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { 
    About, 
    Acne, 
    AcneScars, 
    Alopecia, 
    BrowCheeks, 
    CelluliteLooseSkin, 
    DarkCircles, 
    DarkThinLip, 
    Dilatepores, 
    DoubleChin, 
    DullSkin, 
    ExcessBody, 
    Facialhair, 
    Home, 
    OurService, 
    Sunkeneyes, 
    SweatControl, 
    TanningUnevenSkin, 
    TattooRemoval, 
    WartsSkinTags,
    Stretchmarks,
    SaggyPuffyEye,
    SaggingAgeing,
    Rosacea,
    Pigmentation,
    Melasma,
    MarksSpots,
    LipAugmuntation,
    Hairloss,
    GlowMaintenance,
    Freckles,
    Finelineswrinkles,
    FacialRemodelling,
    Botox,
    ChemicalPeeling,
    DermalFillers,
    DermaRoller,
    Diamond,
    FaceMesotherapy,
    HIFU,
    LaserHairReduction,
    Mesotherapy,
    PlateletRichPlasma,
    PRP,
    QSwitch,
    SkinMaintenance,
    SkinRejuvenation,
    SynergyPlus,
    Holistic,
    Psychological,
    Meditation,
    Yoga,
    WeightlessMesotherapy,
    HIFUBody,
    FIRDetox,
    FatX,
    AntiObesityPlatform,
    Appointment,
    Contact
    
} from '../Views'



const AppRouter = () => {
    let history = useNavigate()
    let dispatch = useDispatch();    
  return (
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/service" exact element={<OurService/>}/>
        <Route path="/concern/acne" exact element={<Acne/>}/>
        <Route path="/concern/acnescars" exact element={<AcneScars/>}/>
        <Route path="/concern/alopecia" exact element={<Alopecia/>}/>
        <Route path="/concern/browcheeks" exact element={<BrowCheeks/>}/>
        <Route path="/concern/cellulitelooseskin" exact element={<CelluliteLooseSkin/>}/>
        <Route path="/concern/darkcircles" exact element={<DarkCircles/>}/>
        <Route path="/concern/dilatepores" exact element={<Dilatepores/>}/>
        <Route path="/concern/doublechin" exact element={<DoubleChin/>}/>
        <Route path="/concern/dullskin" exact element={<DullSkin/>}/>
        <Route path="/concern/excessbody" exact element={<ExcessBody/>}/>
        <Route path="/concern/facialhair" exact element={<Facialhair/>}/>
        <Route path="/concern/wartsskintags" exact element={<WartsSkinTags/>}/>
        <Route path="/concern/darkthinlip" exact element={<DarkThinLip/>}/>
        <Route path="/concern/tattooremoval" exact element={<TattooRemoval/>}/>
        <Route path="/concern/tanningunevenskin" exact element={<TanningUnevenSkin/>}/>
        <Route path="/concern/sweatcontrol" exact element={<SweatControl/>}/>
        <Route path="/concern/sunkeneyes" exact element={<Sunkeneyes/>}/>
        <Route path="/concern/stretchmarks" exact element={<Stretchmarks/>}/>
        <Route path="/concern/saggypuffyeye" exact element={<SaggyPuffyEye/>}/>
        <Route path="/concern/saggingageing" exact element={<SaggingAgeing/>}/>
        <Route path="/concern/rosacea" exact element={<Rosacea/>}/>
        <Route path="/concern/pigmentation" exact element={<Pigmentation/>}/>
        <Route path="/concern/melasma" exact element={<Melasma/>}/>
        <Route path="/concern/marksspots" exact element={<MarksSpots/>}/>
        <Route path="/concern/lipaugmuntation" exact element={<LipAugmuntation/>}/>
        <Route path="/concern/Hairloss" exact element={<Hairloss/>}/>
        <Route path="/concern/glowmaintenance" exact element={<GlowMaintenance/>}/>
        <Route path="/concern/freckles" exact element={<Freckles/>}/>
        <Route path="/concern/finelineswrinkles" exact element={<Finelineswrinkles/>}/>
        <Route path="/concern/facialremodelling" exact element={<FacialRemodelling/>}/>
        <Route path="/aesthetic/botox" exact element={<Botox/>}/>
        <Route path="/aesthetic/chemicalpeeling" exact element={<ChemicalPeeling/>}/>
        <Route path="/aesthetic/dermalfillers" exact element={<DermalFillers/>}/>
        <Route path="/aesthetic/dermaroller" exact element={<DermaRoller/>}/>
        <Route path="/aesthetic/diamond" exact element={<Diamond/>}/>
        <Route path="/aesthetic/facemesotherapy" exact element={<FaceMesotherapy/>}/>
        <Route path="/aesthetic/hifu" exact element={<HIFU/>}/>
        <Route path="/aesthetic/laserhairreduction" exact element={<LaserHairReduction/>}/>
        <Route path="/aesthetic/mesotherapy" exact element={<Mesotherapy/>}/>
        <Route path="/aesthetic/plateletrichplasma" exact element={<PlateletRichPlasma/>}/>
        <Route path="/aesthetic/prp" exact element={<PRP/>}/>
        <Route path="/aesthetic/qswitch" exact element={<QSwitch/>}/>
        <Route path="/aesthetic/synergyPlus" exact element={<SynergyPlus/>}/>
        <Route path="/aesthetic/skinmaintenance" exact element={<SkinMaintenance/>}/>
        <Route path="/aesthetic/skinrejuvenation" exact element={<SkinRejuvenation/>}/>
        <Route path="/weightloss/antiobesityplatform" exact element={<AntiObesityPlatform/>}/>
        <Route path="/weightloss/fatx" exact element={<FatX/>}/>
        <Route path="/weightloss/firdetox" exact element={<FIRDetox/>}/>
        <Route path="/weightloss/hifubody" exact element={<HIFUBody/>}/>
        <Route path="/weightloss/mesotherapy" exact element={<WeightlessMesotherapy/>}/>
        <Route path="/weightloss/yoga" exact element={<Yoga/>}/>
        <Route path="/holistic/" exact element={<Holistic/>}/>
        <Route path="/holistic/psychological" exact element={<Psychological/>}/>
        <Route path="/holistic/meditation" exact element={<Meditation/>}/>
        <Route path="/holistic/yoga" exact element={<Yoga/>}/>
        <Route path="/appointment/" exact element={<Appointment/>}/>
        <Route path="/contact/" exact element={<Contact/>}/>
    </Routes>
  )
}

export default AppRouter
