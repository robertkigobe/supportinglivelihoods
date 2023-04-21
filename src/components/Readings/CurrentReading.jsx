import React from "react";
import "./CurrentReading.css";
import "../../shared.css";
import { Link } from "react-router-dom";

const CurrentReading = () => {
  return (
    <div className="main-reading">
      <h1 className="main__reading__title">
        OLUNAKU LW'OMUKAMA OLW'OKUBIRI OLWA PASKA OMWAKA A 04-23-2023
      </h1>

      <section className="readings">
        <Link className="reading-link" to="#">
          <h2 className="reading__subtitle1">ESSOMO I</h2>
          <h3 className="reading__info1">
            Bonna abakkiriza, baabanga wamu, n'ebyabwe byonna nga babissa wamu.
          </h3>
          <h4 className="reading__subtitle2">
            Bye tusoma mu kitabo ky'Ebikolwa by'Abatume [2:42-47]
          </h4>
          <p className="reading__info2">
            Ab’oluganda baanyiikiranga okuyigirizibwa Abatume n’okussa ekimu mu
            kumenya omugaati, ne mu kwegayirira. Ebyewuunyo ebingi n’ebikuuno
            Abatume bye baakolanga, buli omu ng’abinyeenyeza mutwe. Bonna
            abakkirizanga, baabanga wamu, n’ebyabwe byonna nga babissa wamu.
            Baatundanga ettaka n’ebintu byabwe, ne babigabira bonna, buli muntu
            nga bwe yeetaaga. Era buli lunaku nga basiiba wamu mu Kiggwa kya
            Katonda, ne bayitaayita mu mayumba nga Bamenya omugaati; emmere
            yaabwe nga bagiriisa sanyu, nga mpaawo bukuusa. Ne bagulumiza
            Katonda, era ng’abantu bonna babaagala, n’Omukama n’ayongeranga
            bulijjo omuwendo gw’abagenda okulokoka.
          </p>
          <div className="main__reading-answer">
            <h4>Ebyo Omukama y’abyogera. Katonda yeebale</h4>
          </div>
        </Link>
      </section>
      <section className="readings">
        <Link className="reading-link" to="#">
          <h2 className="reading__subtitle1">
            OLUYIMBA OLW’OKWEBUULIRIRA: Zabbuli 117: 2-4, 13-15, 22-24
          </h2>

          <h4 className="reading__subtitle2">
            EKIDDIBWAMU: Mwebaze Omukama kubanga mulungi, kubanga emirembe
            gyonna asaasira.
          </h4>
          <p className="reading__info2">
            Ennyumba ya Yisraeli egambe nti: emirembe gyonna asaasira. *Abatya
            Omukama bagambe nti: emirembe gyonna asaasira. Ekidd. Bwe
            nnasindikibwa, nnasindikibwa ngwe, naye Omukama nanyamba. *Eddoboozi
            ly'okujaganya n'ery'obulokofu, weema z'abatuufu. Ekidd.
          </p>
          <p className="reading__info2">
            Ejjinja lye baasuulagana nga bazimba, lye lyafuuka lukulwe mu
            nsonda. *Luno lwe lunaku Omukama lw'akoze, tulujaganyizeemu,
            tulusanyukiremu. Ekidd.
          </p>
        </Link>
      </section>
      <section className="readings">
        <Link className="reading-link" to="#">
          <h2 className="reading__subtitle1">ESSOMO II</h2>
          <h3 className="reading__info1">
            Yatuwa okuzaalibwa ogwokubiri mu suubi eddamu, olw’okuzuukira kwa
            Kristu mu bafu.
          </h3>
          <h4 className="reading__subtitle2">
            Bye tusoma mu Bbaluwa embereberye eya Petro Omutume [1:3-9]
          </h4>
          <p className="reading__info2">
            Katonda Kitaawe wa Mukama waffe Yezu Kristu agulumizibwe: mu kisa
            ekingi, yatuwa okuzaalibwa ogwokubiri mu ssuubi eddamu
            olw'okuzuukira kwa Yezu Kristu mu bafu; ne mu busika obutagooka,
            obutayonooneka, obutafuma obubalinda mu ggulu, olw’okubanga
            mukkiriza, Katonda abakuuma n'obuyinza bwe okutuuka lwe mulituuka mu
            bulamu obwo obujja okulabika ku nkomerero y’obudde. Ebyo kimala
            okubaleetera essanyu, nandibadde musanga ebizibu ebya buli ngeri;
            ebyo bya kugeza kukkiriza kwammwe okw’omuwendo okusinga zawabu
            alongoosebwa mu muliro kusobole okugulumizibwa, okutendebwa
            n’okussibwamu ekitiibwa luli Mukama waffe Yezu Kristu lw’alijja.
            Timumulabangako, sso mumwagala; na buli kati timunnamulaba, sso
            mumukkiriza ne mujjula essanyu ery’ekitalo, nga mukungula kye
            munoonya mu kukkiriza kwammwe, nti okulokoka kw’emyoyo gyammwe.
          </p>
          <div className="main__reading-answer">
            <h4>Ebyo Omukama y’abyogera. Katonda yeebale</h4>
          </div>{" "}
        </Link>
      </section>
      <section className="readings">
        <Link className="reading-link" to="#">
          <h2 className="reading__subtitle1">OKWANIRIZA EVANJIRI</h2>

          <p className="reading__info2">
            Yatuwa okuzaalibwa ogwokubiri mu suubi eddamu, olw’okuzuukira kwa
            Kristu mu bafu.
          </p>
          <p className="reading__info2">
            Alleluya. Toma okkiriza kubanga ondabyeko, Omukama bw’agamba. Sso ba
            mukisa abakkiriza nga tibalabyeko. Alleluya
          </p>
        </Link>
      </section>

      <section className="readings">
        <Link className="reading-link" to="#">
          <h2 className="reading__subtitle1">EVANJIRI</h2>
          <h3 className="reading__info1">
            Bwe waayita ennaku munaana Yezu n’ajja.
          </h3>
          <h4 className="reading__subtitle2">
            Ebigambo by’Evanjili ya Mukama waffe Yezu Kristu ebivudde mu Yoanna!
            [20:19-31]
          </h4>

          <p className="reading__info2">
            Obudde bwe bwali buwungedde ku olwo oluddirira Sabbato, abayigirizwa
            we baali bakuŋŋanidde enzigi nga nsibe, olw'okutya abayudaaya, Yezu
            n'ajja n'abayimiriramu wakati n'abagamba, nti: Emirembe gibe ku
            mmwe! Bwe yamala okwogera ebyo, n'abalaga ebibatu ,n'olubiriizi.
            Abayigirizwa ne basanyuka okulaba Omukama. Ye' n'addamu okubagamba
            nti: Emirembe gibe ku mmwe; nga Kitange bwe yantuma; nange bwe
            mbatuma. Bwe yasirissa ebyo, n'abafuuwako omukka, n'abagamba nti:
            Mufune Mwoyo Mutuukirivu. Ebibi by'abantu bye munaasonyiwanga nga
            bibasonyiyiddwa; ebibi by'abantu bye mutaasonyiwenga era tibijja
            kubasonyiyibwanga.
          </p>
          <p className="reading__info2">
            Toma omu ku Kkumi n'ababiri ayitibwa Omulongo (Didimo) tiyali na
            banne Yezu Iwe yajja. Abayigirizwa banne ne bamugamba nti: Omukama
            tumulabye! Ye n'abaddamu nti: Wabula nga ndabye mu bibatu bye,
            ebiwundu eby'enninga ne mbissaamu olunwe lwange, ne nzisa n'omukono
            mu lubiriizi; sijja kukkiriza.
          </p>
          <p className="reading__info2">
            Ne wayita ennaku munaana; era abayigirizwa be baali mu nju, ne Toma,
            nga mw'ali nabo. Yezu n'ajja, enzigi nga nzigale, n'abayimiriramu
            wakati n'abagamba nti: Emirembe gibe ku mmwe! Awo n'agamba Toma nti:
            Olunwe Iwo luyingize wano, laba n'ebibatu byange; leeta n'omukono
            gwo oguteeke mu lubiriizi lwange; leka butakkiriza, naye kkiriza.
            Toma n'addamu n'amugamba nti: Mukama wange, Katonda wange! Yezu
            'n'amugamba nti: Toma, okkiriza kubanga ondabyeko! Sso ba mukisa
            abakkiriza nga tibalabyeko. Era waliwo bingi n'ebyewuunyo ebirala
            Yezu bye yakolanga mu maaso g'abayigirizwa be ebitaawandiikibwa mu
            kitabo kino.
          </p>
          <p className="reading__info2">
            Bino byawandiikibwa mulyoke mukkirizeYezu nga ye Kristu Omwana wa
            Katonda, ate olw'okukkiriza mutyo, mufune obulamu mu linnya lye.
          </p>
          <div className="main__reading-answer">
            <h4>Ebyo Omukama y’abyogera. Katonda yeebale</h4>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default CurrentReading;
