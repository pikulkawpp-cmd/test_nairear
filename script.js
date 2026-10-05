const questions = [
    {
        question: "จริยธรรมตามบทที่ 8 ข้อใดหมายถึง 'การยอมรับสิทธิและความคิดเห็นที่แตกต่าง'",
        options: [
            "A. การปฏิบัติตามคำสั่งอย่างเคร่งครัด",
            "B. เคารผู้อื่น",
            "C. การสร้างผลงานส่วนรวม",
            "D. ความเสียสละเพื่อองค์กร"
        ],
        answer: 1
    },
    {
        question: "จุดประสงค์ของวิชารัฐศาสตร์ในด้าน 'คุณลักษณะ' (Characteristics) เน้นพัฒนาสิ่งใด",
        options: [
            "A. ความรู้ความเข้าใจในกฎหมายเบื้องต้น",
            "B. มีความรับผิดชอบ คุณธรรม มีภาวะผู้นำ และคำนึงถึงประโยชน์ส่วนรวม",
            "C. ทักษะการใช้คำสั่งในหน่วยงาน",
            "D. การวิเคราะห์ปัญหาเฉพาะหน้า"
        ],
        answer: 1
    },
    {
        question: "บทที่ 9 'ฝึกปฏิบัติภาวะผู้นำ' ประกอบด้วยกิจกรรมหลักในข้อใด",
        options: [
            "A. การทดสอบสมรรถภาพร่างกายและว่ายน้ำ",
            "B. การฝึกยุทธวิธีและการใช้อาวุธ",
            "C. การนำเสนอความคิดเห็น, การกำหนดวิสัยทัศน์, การทำงานเป็นทีม, การแก้ปัญหาจากสถานการณ์จำลอง, การอภิปราย",
            "D. การตรวจระเบียบแถวประจำวัน"
        ],
        answer: 2
    },
    {
        question: "เอกสารการเรียนรู้เรื่องรัฐศาสตร์วิสัยทัศน์ผู้นำนี้จัดทำโดยนักศึกษากรุ๊ปใด",
        options: [
            "A. ชั้นปีที่ 1 โรงเรียนนายเรือ",
            "B. ชั้นปีที่ 2 โรงเรียนนายเรือ",
            "C. ชั้นปีที่ 3 โรงเรียนนายเรือ",
            "D. ชั้นปีที่ 4 โรงเรียนนายเรือ"
        ],
        answer: 3
    },
    {
        question: "ความหมายของการ 'พัฒนา' ตามบทที่ 4 ตรงกับคำอธิบายในข้อใด",
        options: [
            "A. การรักษามาตรฐานเดิมไว้ให้คงที่",
            "B. การปรับปรุงหรือเปลี่ยนแปลงให้ดีขึ้น",
            "C. การลดขั้นตอนการปฏิบัติงาน",
            "D. การทำตามระเบียบข้อบังคับ"
        ],
        answer: 1
    },
    {
        question: "ข้อใด ไม่ใช่ จุดประสงค์ด้านทักษะ (Skill) ของวิชารัฐศาสตร์วิสัยทัศน์ผู้นำ",
        options: [
            "A. ทักษะการสื่อสารและการประสานงาน",
            "B. ทักษะการคิดวิเคราะห์และการตัดสินใจ",
            "C. มีความรับผิดชอบและคุณธรรม",
            "D. ทักษะการทำงานร่วมกับผู้อื่น"
        ],
        answer: 2
    },
    {
        question: "การทำงานร่วมกันเพื่อเป้าหมายเดียวกัน ตามบทที่ 6 เรียกว่าอะไร",
        options: [
            "A. การแข่งขัน",
            "B. การสั่งการ",
            "C. ความร่วมมือ",
            "D. การประเมินผล"
        ],
        answer: 2
    },
    {
        question: "ตามบทที่ 2 'ผู้ตาม' มีบทบาทหน้าที่สำคัญอย่างไรในการทำงาน",
        options: [
            "A. ร่วมปฏิบัติงานและสนับสนุนการดำเนินงานของผู้นำ",
            "B. เป็นผู้กำหนดนโยบายหลักขององค์กร",
            "C. ตรวจสอบความถูกต้องของคำสั่ง",
            "D. รอรับคำสั่งโดยไม่ต้องออกความคิดเห็น"
        ],
        answer: 0
    },
    {
        question: "จริยธรรมตามบทที่ 8 ข้อใดเกี่ยวข้องกับการตรงต่อเวลาและความซื่อสัตย์สุจริต",
        options: [
            "A. การแต่งกายถูกต้องตามระเบียบ",
            "B. ความซื่อสัตย์สุจริตและวินัย",
            "C. การช่วยเหลือผู้บังคับบัญชา",
            "D. การออกกำลังกายสม่ำเสมอ"
        ],
        answer: 1
    },
    {
        question: "ในกระบวนการทำงานเป็นทีม ผู้นำที่ดีควรมีลักษณะอย่างไรมากที่สุด",
        options: [
            "A. ตัดสินใจคนเดียวทุกเรื่อง",
            "B. รับฟังความคิดเห็นและเปิดโอกาสให้ทีมมีส่วนร่วม",
            "C. มอบหมายงานแล้วปล่อยให้ทำโดยไม่ติดตาม",
            "D. เน้นความเข้มงวดและลงโทษเมื่อทำผิด"
        ],
        answer: 1
    },
    {
        question: "ข้อใดคือองค์ประกอบสำคัญของวิสัยทัศน์ (Vision)",
        options: [
            "A. ภาพอนาคตที่ต้องการไปถึงและความชัดเจนในเป้าหมาย",
            "B. บันทึกข้อความย้อนหลังของหน่วยงาน",
            "C. สถิติการปฏิบัติงานในปีที่ผ่านมา",
            "D. งบประมาณที่มีอยู่ในปัจจุบัน"
        ],
        answer: 0
    },
    {
        question: "ทักษะการสื่อสารที่ดี (Communication Skill) ประกอบด้วยสิ่งสำคัญคือข้อใด",
        options: [
            "A. การพูดเสียงดังฟังชัดอย่างเดียว",
            "B. การส่งสารที่ชัดเจนและการเป็นผู้ฟังที่ดี",
            "C. การใช้วิทยุสื่อสารทางทหาร",
            "D. การเขียนบันทึกข้อความราชการ"
        ],
        answer: 1
    },
    {
        question: "การแก้ปัญหาในสถานการณ์จำลอง (Simulation) มีประโยชน์อย่างไรต่อผู้นำ",
        options: [
            "A. ทำให้เสียเวลาในการฝึก",
            "B. ฝึกกระบวนการคิดวิเคราะห์และการตัดสินใจภายใต้ความกดดัน",
            "C. เพิ่มเอกสารในระบบราชการ",
            "D. ลดจำนวนผู้ปฏิบัติงาน"
        ],
        answer: 1
    },
    {
        question: "คุณลักษณะของผู้นำที่ดีในสถานการณ์วิกฤตควรเป็นอย่างไร",
        options: [
            "A. ตื่นตระหนกและรีบรายงานผู้บังคับบัญชาทันที",
            "B. สงบสติอารมณ์ ตัดสินใจเด็ดขาด และเป็นที่พึ่งให้แก่ทีม",
            "C. หลบเลี่ยงปัญหาเพื่อให้ลูกน้องแก้กันเอง",
            "D. รอคำสั่งจากส่วนกลางเท่านั้น"
        ],
        answer: 1
    },
    {
        question: "ข้อใดคือความหมายที่ถูกต้องที่สุดของคำว่า 'ภาวะผู้นำ' (Leadership)",
        options: [
            "A. ตำแหน่งยศทหารที่สูงที่สุด",
            "B. ความสามารถในการชักจูงและนำพาผู้อื่นให้บรรลุเป้าหมายร่วมกัน",
            "C. อำนาจในการสั่งการและลงโทษ",
            "D. การปฏิบัติหน้าที่ตามระเบียบวินัย"
        ],
        answer: 1
    },
    {
        question: "กระบวนการตัดสินใจที่ดี (Decision Making) ควรเริ่มจากขั้นตอนใด",
        options: [
            "A. ลงมือปฏิบัติทันที",
            "B. ระบุและทำความเข้าใจปัญหาให้ชัดเจน",
            "C. แจ้งผู้บังคับบัญชา",
            "D. ประเมินผลลัพธ์ย้อนหลัง"
        ],
        answer: 1
    },
    {
        question: "ความสามัคคีในหมู่คณะเกิดขึ้นได้จากสิ่งใดมากที่สุด",
        options: [
            "A. การแข่งขันกันเองภายในกลุ่ม",
            "B. การมีเป้าหมายร่วมกันและความเห็นอกเห็นใจกัน",
            "C. การบังคับใช้กฎระเบียบอย่างเคร่งครัด",
            "D. การมีหัวหน้าหน่วยที่เข้มงวด"
        ],
        answer: 1
    },
    {
        question: "บทบาทของสมาชิกในทีมที่ดีควรเป็นอย่างไร",
        options: [
            "A. ทำงานเฉพาะหน้าที่ตนเองโดยไม่สนใจผู้อื่น",
            "B. เสนอแนะ ช่วยเหลือ และรับผิดชอบต่องานที่ได้รับมอบหมาย",
            "C. รอรับคำสั่งอย่างเดียว",
            "D. ตักเตือนเพื่อนร่วมงานเมื่อทำผิดพลาด"
        ],
        answer: 1
    },
    {
        question: "ข้อใดคืออุปสรรคสำคัญที่สุดในการสื่อสารภายในทีม",
        options: [
            "A. การใช้อุปกรณ์สื่อสารที่ทันสมัย",
            "B. อคติ การไม่ตั้งใจฟัง และการใช้ภาษาที่ไม่ชัดเจน",
            "C. การประชุมร่วมกันบ่อยครั้ง",
            "D. การจดบันทึกการประชุม"
        ],
        answer: 1
    },
    {
        question: "การสร้างแรงจูงใจ (Motivation) ให้กับผู้ใต้บังคับบัญชาควรทำอย่างไร",
        options: [
            "A. ใช้การลงโทษอย่างรุนแรงเมื่อทำผิดพลาด",
            "B. ชื่นชมผลงาน ให้เกียรติ และสร้างบรรยากาศการทำงานที่ดี",
            "C. เพิ่มภาระงานให้มากขึ้นเพื่อทัศนศึกษา",
            "D. ปล่อยให้ทำงานตามอัธยาศัย"
        ],
        answer: 1
    },
    {
        question: "ตามประมวลกฎหมายอาญา มาตรา ๗ บทนิยามศัพท์ของ 'ผู้ต้องสงสัย' คือข้อใด",
        options: [
            "A. ข้าราชการทหารหรือตำรวจซึ่งได้รับการยืนยันว่ากระทำความผิด และอยู่ในระหว่างการพิจารณาคดีของศาล",
            "B. บุคคลซึ่งมิได้อยู่ในสังกัดของหน่วยงานทหาร ตำรวจ หรือหน่วยงานราชการอื่นใด",
            "C. บุคคลซึ่งยังมิได้รับการยืนยันว่าเป็นผู้กระทำความผิด แต่ปรากฏจากการสืบสวนหรือสอบสวนว่ามีส่วนเกี่ยวข้อง",
            "D. บุคคลซึ่งได้รับการยืนยันว่าเป็นผู้กระทำความผิด แต่มิได้เข้าสู่กระบวนการพิจารณาคดีของศาล"
        ],
        answer: 2
    },
    {
        question: "จุดต่างสำคัญที่แยก 'ผู้ต้องหา' ออกจาก 'ผู้ต้องสงสัย' ตามมาตรา ๗ คือประเด็นใด",
        options: [
            "A. ผู้ต้องหาคือผู้ที่ถูกศาลตัดสินลงโทษจำคุกเรียบร้อยแล้ว",
            "B. ผู้ต้องหาได้รับการยืนยันแล้วว่าเป็นผู้กระทำความผิด แต่ผู้ต้องสงสัยยังไม่ได้รับการยืนยัน",
            "C. ผู้ต้องหาต้องเป็นข้าราชการเท่านั้น ส่วนผู้ต้องสงสัยเป็นประชาชน",
            "D. ผู้ต้องหาอยู่ในระหว่างการพิจารณาคดีของศาลแล้ว"
        ],
        answer: 1
    },
    {
        question: "คุณลักษณะเฉพาะของ 'จำเลย' ตามบทนิยามในประมวลกฎหมายอาญา มาตรา ๗ คือข้อใด",
        options: [
            "A. ผู้กระทำความผิดที่ยอมรับสารภาพในชั้นสอบสวนของตำรวจ",
            "B. ข้าราชการทหารหรือตำรวจซึ่งได้รับการยืนยันว่ากระทำความผิด และอยู่ในระหว่างการพิจารณาคดีของศาล",
            "C. บุคคลธรรมดาที่ถูกควบคุมตัวไว้ในห้องกักของสถานีตำรวจ",
            "D. ผู้ที่ถูกออกหมายเรียกให้มาให้การในฐานะพยาน"
        ],
        answer: 1
    },
    {
        question: "หากเรียงลำดับสถานะบุคคลตามกระบวนการทางกฎหมายในมาตรา ๗ จากขั้นเริ่มต้นไปสู่ขั้นศาล ข้อใดเรียงได้ถูกต้อง",
        options: [
            "A. ผู้ต้องสงสัย → ผู้ต้องหา → จำเลย",
            "B. ผู้ต้องหา → ผู้ต้องสงสัย → จำเลย",
            "C. ผู้ต้องสงสัย → จำเลย → ผู้ต้องหา",
            "D. จำเลย → ผู้ต้องหา → ผู้ต้องสงสัย"
        ],
        answer: 0
    },
    {
        question: "ข้อใดอธิบายความแตกต่างระหว่าง 'ผู้ต้องหา' กับ 'จำเลย' ตามมาตรา ๗ ได้แม่นยำที่สุด",
        options: [
            "A. ผู้ต้องหาเป็นผู้บริสุทธิ์ ส่วนจำเลยเป็นผู้มีความผิดแล้ว",
            "B. ทั้งสองได้รับการยืนยันว่าทำผิดแล้ว แต่ผู้ต้องหายังไม่เข้าสู่กระบวนการศาล ส่วนจำเลยอยู่ในระหว่างการพิจารณาของศาล",
            "C. ผู้ต้องหาได้รับการประกันตัวแล้ว ส่วนจำเลยถูกจำคุกระหว่างรอการพิจารณา",
            "D. ผู้ต้องหาใช้กับพลเรือน ส่วนจำเลยใช้กับทหารและตำรวจเท่านั้น"
        ],
        answer: 1
    },
    {
        question: "สถานการณ์จำลอง: เจ้าหน้าที่สืบสวนพบว่า นาย A มีพฤติการณ์สอดคล้องกับผู้ก่อเหตุป่วนลานฝึก แต่ยังไม่มีหลักฐานแน่ชัดยืนยันว่านาย A เป็นผู้กระทำความผิดจริง ตามมาตรา ๗ นาย A มีสถานะเป็นอะไร",
        options: [
            "A. จำเลย",
            "B. ผู้ต้องหา",
            "C. เจ้าพนักงาน",
            "D. ผู้ต้องสงสัย"
        ],
        answer: 3
    },
    {
        question: "สถานการณ์จำลอง: จ่าสิบเอก B ข้าราชการทหาร ถูกจับกุมพร้อมพยานหลักฐานมัดตัวชัดเจนว่าฉ้อโกง ขณะนี้พนักงานอัยการได้ยื่นฟ้องคดี และคดีอยู่ในระหว่างการพิจารณาคดีของศาล ตามมาตรา ๗ จ่าสิบเอก B มีสถานะเป็นอะไร",
        options: [
            "A. ผู้ต้องหา",
            "B. จำเลย",
            "C. ประชาชน",
            "D. ผู้ต้องสงสัย"
        ],
        answer: 1
    },
    {
        question: "ตามประมวลกฎหมายอาญา มาตรา ๔ อัตราโทษจำคุกสำหรับ 'ความผิดสถานเบา' กำหนดไว้อย่างไร",
        options: [
            "A. จำคุกไม่เกิน ๑,๘๐๐ วินาที หรือ ๓๐ นาที",
            "B. จำคุกไม่เกิน ๖๐๐ ถึง ๑,๒๐๐ วินาที หรือ ๑๐ ถึง ๑0 นาที",
            "C. จำคุกไม่เกิน ๔๐๐ ถึง ๖๐๐ วินาที หรือ ๕ ถึง ๑0 นาที",
            "D. ให้ออกจากราชการโดยไม่มีเกียรติ"
        ],
        answer: 0
    },
    {
        question: "ตามพระราชบัญญัติว่าด้วยวินัย พ.ศ. ๒๖๖๙ มาตรา ๕ กำหนด 'ทัณฑ์' ที่จะลงแก่ผู้กระทำผิดวินัยไว้ ๓ สถาน ได้แก่อะไรบ้าง",
        options: [
            "A. สถานเบา, สถานกลาง, สถานหนัก",
            "B. ตัดเงินเดือน, บันทึกความผิด, เนรเทศ",
            "C. ภาคทัณฑ์, ธำรงวินัย, จำคุก",
            "D. ว่ากล่าวตักเตือน, ลดชั้นยศ, ปลดออก"
        ],
        answer: 2
    },
    {
        question: "ตามพระราชบัญญัติกฎระเบียบ พ.ศ. ๒๖๖๙ มาตรา ๓๓ (๖) ข้อบังคับเรื่องทรงผมและสีผมของข้าราชการทหารและตำรวจกำหนดไว้อย่างไร",
        options: [
            "A. ย้อมสีผมได้เฉพาะโทนสีน้ำตาลเข้มสุภาพ",
            "B. อนุญาตให้ย้อมสีผมได้เฉพาะข้าราชการชั้นสัญญาบัตรขึ้นไป",
            "C. ห้ามย้อมสีผมโดยเด็ดขาด ต้องเป็นสีดำโดยธรรมชาติเท่านั้น",
            "D. ย้อมสีผมได้หากได้รับอนุมัติจากผู้บังคับบัญชาเป็นกรณีพิเศษ"
        ],
        answer: 2
    }
];

let currentQuestionIndex = 0;
let userAnswers = new Array(questions.length).fill(null);
let timerInterval;
let secondsElapsed = 0;

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const downloadBtn = document.getElementById('download-btn');

const questionCounter = document.getElementById('question-counter');
const timerDisplay = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const scoreNumber = document.getElementById('score-number');
const statPercent = document.getElementById('stat-percent');
const resultTitle = document.getElementById('result-title');
const resultMessage = document.getElementById('result-message');
const resultBadge = document.getElementById('result-badge');
const resultIcon = document.getElementById('result-icon');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);
downloadBtn.addEventListener('click', downloadResultImage);

function startQuiz() {
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    currentQuestionIndex = 0;
    userAnswers.fill(null);
    secondsElapsed = 0;
    startTimer();
    loadQuestion();
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        secondsElapsed++;
        let mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        let secs = (secondsElapsed % 60).toString().padStart(2, '0');
        timerDisplay.textContent = `${mins}:${secs}`;
    }, 1000);
}

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    questionCounter.textContent = `ข้อที่ ${currentQuestionIndex + 1} / ${questions.length}`;
    questionText.textContent = q.question;
    
    // อัปเดต Progress Bar
    let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // สร้างปุ่มตัวเลือก
    optionsContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.classList.add('option-btn');
        if (userAnswers[currentQuestionIndex] === index) {
            btn.classList.add('selected');
        }
        btn.textContent = opt;
        btn.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(btn);
    });

    // ควบคุมปุ่มย้อนกลับ/ถัดไป
    prevBtn.disabled = currentQuestionIndex === 0;
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.innerHTML = 'ส่งคำตอบ <i class="fa-solid fa-check"></i>';
    } else {
        nextBtn.innerHTML = 'ข้อถัดไป <i class="fa-solid fa-arrow-right"></i>';
    }
}

function selectOption(index) {
    userAnswers[currentQuestionIndex] = index;
    const optionButtons = optionsContainer.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
        if (idx === index) {
            btn.classList.add('selected');
        } else {
            btn.classList.remove('selected');
        }
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function finishQuiz() {
    clearInterval(timerInterval);
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    // คำนวณคะแนน
    let score = 0;
    userAnswers.forEach((ans, idx) => {
        if (ans === questions[idx].answer) {
            score++;
        }
    });

    let percent = Math.round((score / questions.length) * 100);
    scoreNumber.textContent = score;
    statPercent.textContent = `${percent}%`;

    // ตรวจสอบเกณฑ์ผ่าน (18 คะแนนขึ้นไป)
    if (score >= 18) {
        resultBadge.className = 'result-badge pass';
        resultIcon.className = 'fa-solid fa-circle-check';
        resultTitle.textContent = 'ยินดีด้วย! คุณสอบผ่าน';
        resultMessage.textContent = `เยี่ยมมาก! คุณทำคะแนนได้ถึงเกณฑ์ที่กำหนด (ผ่าน 18 คะแนนขึ้นไป)`;
        resultMessage.style.color = 'var(--success)';
    } else {
        resultBadge.className = 'result-badge fail';
        resultIcon.className = 'fa-solid fa-circle-xmark';
        resultTitle.textContent = 'เสียใจด้วย คุณไม่ผ่านเกณฑ์';
        resultMessage.textContent = `คุณทำคะแนนได้ไม่ถึงเกณฑ์ที่กำหนด (ต้องได้ 18 คะแนนขึ้นไป)`;
        resultMessage.style.color = 'var(--danger)';
    }
}

function restartQuiz() {
    resultScreen.classList.remove('active');
    welcomeScreen.classList.add('active');
}

function downloadResultImage() {
    const captureArea = document.getElementById('capture-area');
    
    html2canvas(captureArea, { scale: 2, useCORS: true }).then(canvas => {
        let link = document.createElement('a');
        link.download = 'exam-result.png';
        link.href = canvas.toDataURL('image/png');
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }).catch(err => {
        console.error("เกิดข้อผิดพลาดในการดาวน์โหลดรูปภาพ: ", err);
        alert("ไม่สามารถดาวน์โหลดรูปภาพได้ กรุณาลองใหม่อีกครั้ง");
    });
}