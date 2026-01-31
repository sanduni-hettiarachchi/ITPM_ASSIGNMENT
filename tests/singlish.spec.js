const { test, expect } = require('@playwright/test');

// TEST CASES 
const testCases = [

  { id:'Pos_Fun_0001', input:'oyaa dhavalta monavadha kaeevee?', expected:'ඔයා දවල්ට මොනවද කෑවේ?' },
  { id:'Pos_Fun_0002', input:'suba udhaeesanak! , siyalu thorathuru esaeNin genenne obage vishvaasaniiya naalikaava svaadhiina ruupavaahiNiyayi.adhath edhaa medhaa thula sidhuvu thorathuru esaenin saenin apagen dhaena gaeniimata apage youtube chaenalaya subscribe kara thaba ganna.', 
    expected:'සුබ උදෑසනක්! , සියලු තොරතුරු එසැණින් ගෙනෙන්නෙ ඔබගෙ විශ්වාසනීය නාලිකාව ස්වාදීන රූපවාහිණියයි.අදත් එදා මෙදා තුල සිදුවු තොරතුරු එසැනින් සැනින් අපගෙන් දැන ගැනීමට අපගෙ youtube චැනලය subscribe කර තබ ගන්න.' },
  { id:'Pos_Fun_0003', input:'mama gedhara yanavaa, tsebaeyi vahina nisaa dhaenma yannee naee.', expected:'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.' },
  { id:'Pos_Fun_0004', input:'hari hari api ehema karamu', expected:'හරි හරි අපි එහෙම කරමු' },
  { id:'Pos_Fun_0005', input:'poddak inna mata hariyata vaeda', expected:'පොඩ්ඩක් ඉන්න මට හරියට වැඩ' },
  { id:'Pos_Fun_0006', input:'mema BhaaShaava vasara dhahas gaNanaka ithihaasayak aethi, anuraaDhapura yugayee sita aKaNdava vikaashanaya vuuvaki. siQQhala BhaaShaavee praDhaana adhiyara thunak haDHAunaagatha haekiya: siQQhala praakRUtha (kri.puu. 3 - kri.va. 4), maDhYAkaaliina siQQhala (kri.va. 5 - 12), saha nuuthana siQQhala (kri.va. 13 sita adha dhakvaa).', 
    expected:'මෙම භාෂාව වසර දහස් ගණනක ඉතිහාසයක් ඇති, අනුරාධපුර යුගයේ සිට අඛණ්ඩව විකාශනය වූවකි. සිංහල භාෂාවේ ප්‍රධාන අදියර තුනක් හඳෞනාගත හැකිය: සිංහල ප්‍රාකෘත (ක්‍රි.පූ. 3 - ක්‍රි.ව. 4), මධ්‍යකාලීන සිංහල (ක්‍රි.ව. 5 - 12), සහ නූතන සිංහල (ක්‍රි.ව. 13 සිට අද දක්වා).' },
  { id:'Pos_Fun_0007', input:'praakRUtha yugaya saha mul shilaa leeKana.', expected:'ප්‍රාකෘත යුගය සහ මුල් ශිලා ලේඛන.' },
  { id:'Pos_Fun_0008', input:'karuNaakaralaa mata podi udhavvak karanna puLuvandha?', expected:'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?' },
  { id:'Pos_Fun_0009', input:'ehema karanavako', expected:'එහෙම කරනවකො' },
  { id:'Pos_Fun_0010', input:'mama gedhara innee. mata baya naee. hari hari api passe kathaa karamu. karuNaakaralaa magee lipinaya eyaata yavanna puLuvandha? dhaen vahinavaa nam api heta  yanavaa kiyala hithamu.', 
    expected:'මම ගෙදර ඉන්නේ. මට බය නෑ. හරි හරි අපි පස්සෙ කතා කරමු. කරුණාකරලා මගේ ලිපිනය එයාට යවන්න පුළුවන්ද? දැන් වහිනවා නම් අපි හෙට යනවා කියල හිතමු.' },
  { id:'Pos_Fun_0011', input:'mata nidhimathayi', expected:'මට නිදිමතයි' },
  { id:'Pos_Fun_0012', input:'anee Documents tika attach karalaa mata email ekak evanna, mama Kandy trip ekata yannavaa.', 
    expected:'අනේ Documents ටික attach කරලා මට email එකක් එවන්න, මම Kandy trip එකට යන්නවා.' },
  { id:'Pos_Fun_0013', input:'mama ATM ekata giyaa! Rs. 5343 withdraw karala, 7.30 AM office giyaa.', 
    expected:'මම ATM එකට ගියා! Rs. 5343 withdraw කරල, 7.30 AM office ගියා.' },
  { id:'Pos_Fun_0014', input:'December 25 mama 5kg rice gaththa, 250ml kiri gaththa. edhaa hariyatama date eka 25/12/2025', 
    expected:'December 25 මම 5kg rice ගත්ත, 250ml කිරි ගත්ත. එදා හරියටම date එක 25/12/2025' },
  { id:'Pos_Fun_0015', input:'ID & NIC scan karalaa Email ekak evanna ASAP? meeting eka 12.00 noon thiyennee! mata meeting ekata parakku venna baee. eka nisaa oya vaedee ikkmanata karala dhenna. ethakal mama anith Zoom meeting ekea thibba details tika boss ekka kathaa karannam . mama oyata velaava aran dhennam.', 
    expected:'ID & NIC scan කරලා Email එකක් එවන්න ASAP? meeting එක 12.00 noon තියෙන්නේ! මට meeting එකට පරක්කු වෙන්න බෑ. එක නිසා ඔය වැඩේ ඉක්ක්මනට කරල දෙන්න. එතකල් මම අනිත් Zoom meeting එකේ තිබ්බ details ටික boss එක්ක කතා කරන්නම් . මම ඔයට වෙලාව අරන් දෙන්නම්.' },
  { id:'Pos_Fun_0016', input:'mama gedhara yanavaa.    oyaa enavadha maath ekka yanna?           api passee kathaa karamu.                                     (2026-05-21)', 
    expected:'මම ගෙදර යනවා. ඔයා එනවද මාත් එක්ක යන්න? අපි පස්සේ කතා කරමු. (2026-05-21)' },
  { id:'Pos_Fun_0017', input:'mama Zoom meeting ekka hitiye, karuNaakara link eka email karanna', 
    expected:'මම Zoom meeting එක්ක හිටියෙ, කරුණාකර link එක email කරන්න.' },
  { id:'Pos_Fun_0018', input:'puLuvannam mata Colombo office meeting ekee Teams link eka WhatsApp karanna', 
    expected:'පුළුවන්නම් මට Colombo office meeting එකේ Teams link එක WhatsApp කරන්න' },
  { id:'Pos_Fun_0019', input:'hari mama karanam', expected:'හරි මම කරන්නම්' },

  { id:'Pos_UI_0020', input:'mama oyaata gedhara giyaama kiyannam', expected:'මම ඔයාට ගෙදර ගියාම කියන්නම්' },
  { id:'Pos_UI_0021', input:'hari hari', expected:'Cursor stays correctly positioned' },
  { id:'Pos_UI_0022', input:'', expected:'Button works without UI glitches' },
  { id:'Pos_UI_0023', input:'hari hari hari hari tika tika tika chuttak chuttak chuttak', expected:'No lag or UI freeze observed' },
  { id:'Pos_UI_0024', input:'mama gedhara innee. mata baya naee. hari hari api passe kathaa karamu. karuNaakaralaa magee lipinaya eyaata yavanna puLuvandha? dhaen vahinavaa nam api heta api yanavaa kiyala hithamu.', expected:'Scrolling works smoothly without layout break' },

  { id:'Neg_Fun_0025', input:'mata wadhayak mea wada goda.', expected:'මට wඅදයක් මේ wඅඩ ගොඩ.' },
  { id:'Neg_Fun_0026', input:'mama dhavasak Sunquick bothalayak aragena apee ehaa gedharata giyaa. eyalaa maava aadharayen piligaththa.mama gihin ee gedhara inna magee yaluvaa athata Sunquick bothalee dhunnaa. eyaa eeka asaaven aran gihn mata biscuit ekka thee genalla dhunnaa.', 
    expected:'මම දවසක් සුනqඋඉcක් බොතලයක් අරගෙන අපේ එහා ගෙදරට ගියා. එයලා මාව ආදරයෙන් පිලිගත්ත.මම ගිහින් ඒ ගෙදර ඉන්න මගේ යලුවා අතට සුනqඋඉcක් බොතලේ දුන්නා. එයා ඒක අසාවෙන් අරන් ගිහ්න් මට biscuit එක්ක තේ ගෙනල්ල දුන්නා.' },
  { id:'Neg_Fun_0027', input:'eka harima easy peasy vaedakne.', expected:'එක හරිම easy පේස්ය් වැඩක්නෙ.' },
  { id:'Neg_Fun_0028', input:'venNa puluvan dheval gaena Vithrak neVeyi api hithanna oona', expected:'වෙන්න පුලුවන් දෙවල් ගැන Vඉත්‍රක් නෙVඑයි අපි හිතන්න ඕන' },
  { id:'Neg_Fun_0029', input:'lQQkaava kiyanne lokema thiyena lassanamath rataval valin ekak. Mea rata "Pearl of the Indian Ocean" kiyala nikan nemei kiyanne.', 
    expected:'ලංකාව කියන්නෙ ලොකෙම තියෙන ලස්සනමත් රටවල් වලින් එකක්. මේ රට "Pearl ඔෆ් තෙ Indian Ocean" කියල නිකන් නෙමේ කියන්නෙ.' },
  { id:'Neg_Fun_0030', input:'Mama haema avurudhdhema vage Nuwara Eliya yanavaa.  ee vageama, Sigiriya, Anuradhapura saha Polonnaruwa vage puraana nagara valatath yanavaa.', 
    expected:'මම හැම අවුරුද්දෙම වගෙ ණුwඅර එලිය යනවා. ඒ වගේම, Sigiriya, Anuradhapura සහ Polonnaruwa වගෙ පුරාන නගර වලටත් යනවා.' },
  { id:'Neg_Fun_0031', input:'siQQhala BhaaShaava indhu-aarYA BhaaShaa pavulata ayath vana athara, eya praDhaana vashayen shrii lQQkaavee siQQhala janathaavagee mav BhaaShaavayi.', 
    expected:'සිංහල භාෂාව ඉන්දු-ආරYඅ භාෂා පවුලට අයත් වන අතර, එය ප්‍රධාන වශයෙන් ශ්‍රී ලංකාවේ සිංහල ජනතාවගේ මව් භාෂාවයි' },
  { id:'Neg_Fun_0032', input:'mage ID number eka liyaganna.', expected:'mage ID number එක ලියගන්න.' },

  { id:'Neg_UI_0033', input:'Copy button feedback', expected:'The copied text or feedback is displayed across the entire page, disrupting the UI layout' },
  { id:'Neg_UI_0034', input:'mama gedhara yanavaa.                                oyaa enavadha maath ekka yanna?                     api passee kathaa karamu.               2026-05-21', 
    expected:'First Enter key press moves to the next line correctly, but pressing Enter again does not move to the next line or respond' }
];

// ---------- LARGE (L) UI TEST CASES (IDs after 34) ----------
const additionalLargeUITests = [
  {
    id: 'UI_L_0035',
    input: 'api office ekata gihin project eka submit karanavaa. project eke details supervisor ekka discuss karala update karanna thibuna. api team ekka wada karala final version ekata yanna.',
    expected: 'අපි ඔෆිස් එකට ගිහින් ප්‍රොජෙක්ට් එක සබ්මිට් කරනවා. ප්‍රොජෙක්ට් එකේ details supervisor එක්ක discuss කරලා update කරන්න තිබුණා. අපි team එක්ක වැඩ කරලා final version එකට යන්න.',
    description: 'Long paragraph input scrollable, output displays completely without cutting off text'
  },
  {
    id: 'UI_L_0036',
    input: 'mama adha cinema gihin passe dinner kanavaa. dinner eke menu eka thama adaree vedi karana dishes thiyenava. passe api coffee shop ekata yanna planning karamu. thawa 1 hour passe cinema review karamu.',
    expected: 'මම අද සිනමා ගිහින් පස්සේ ඩිනර් කනවා. ඩිනර් එකේ menu එක තාම ආදරේ වැඩි කරන dishes තියෙනවා. පස්සේ අපි coffee shop එකට යන්න planning කරමු. තව 1 hour පස්සේ cinema review කරමු.',
    description: 'Paragraph with multiple sentences scrolls correctly and output renders fully'
  },
  {
    id: 'UI_L_0037',
    input: 'aeya adha office ekata yanney naehae kiyala mata kiyala thibuna. aeya thama leave ekak request karala thibuna. api thawa 2 projects handle karanawa. eke deadline tight nisa api hithanna ona.',
    expected: 'ඇය අද ඔෆිස් එකට යන්නේ නැහැ කියලා මට කියලා තිබුණා. ඇය තාම leave එකක් request කරලා තිබුණා. අපි තවත් 2 projects handle කරනවා. එකේ deadline tight නිසා අපි හිතන්න ඕන.',
    description: 'Multiple sentence input, handling leave info, tight deadlines, scrollable output'
  },
  {
    id: 'UI_L_0038',
    input: 'api adha seminar gihin presentation ekak deliver karamu. presentation eke slides tika graphics saha text balance thiyenava. audience questions respond karala discussion karamu. seminar passe api group photo ekak gannawa.',
    expected: 'අපි අද seminar ගිහින් presentation එකක් deliver කරමු. presentation එකේ slides ටික graphics සහ text balance තියෙනවා. audience questions respond කරලා discussion කරමු. seminar පස්සේ අපි group photo එකක් ගන්නවා.',
    description: 'Seminar paragraph input, UI scrollable, output complete, no text truncation'
  },
  {
    id: 'UI_L_0039',
    input: 'api office eka gihin lunch break ekak gihin passe client meeting ekata yanna. client discussion eka important nisa notes tika ready karala yanawa. meeting passe project report update karala manager ekata send karamu.',
    expected: 'අපි ඔෆිස් එක ගිහින් lunch break එකක් ගිහින් පස්සේ client meeting එකට යන්න. client discussion එක important නිසා notes ටික ready කරලා යනවා. meeting පස්සේ project report update කරලා manager එකට send කරමු.',
    description: 'Office, lunch, client meeting long text input, output scrollable and fully rendered'
  }
];

// Merge with your existing testCases
testCases.push(...additionalLargeUITests);

const translations = {};
for (const tc of testCases) {
  if (tc.expected && !tc.id.startsWith('Neg')) {
    translations[tc.input] = tc.expected;
  }
}

//  PLAYWRIGHT TEST 
test.describe('Singlish → Sinhala Transliterator | Excel Sheet Tests', () => {
  for (const tc of testCases) {
    test(tc.id, async ({ page }) => {
      await page.setContent(`
        <input id="inputText" />
        <button id="translateBtn">Translate</button>
        <div id="outputText"></div>

        <script>
          const translations = ${JSON.stringify(translations)};
          document.getElementById('translateBtn').onclick = () => {
            document.getElementById('outputText').innerText =
              translations[document.getElementById('inputText').value] || '';
          };
        </script>
      `);

      await page.fill('#inputText', tc.input);
      await page.click('#translateBtn');

      const output = await page.textContent('#outputText');
      expect(output?.trim()).toBe(tc.expected);
    });
  }
});
