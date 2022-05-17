import React from 'react';
import { Divider, Typography } from '@mui/material';
import holud from '../../../../../images/Agri-info/crops/holud_হলুদ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const HoludInfo = () => {

    // dynamic title
    useDocumentTitle("হলুদ");

    return (

        <div className=" rounded-3 bg-white my-4 px-5">
            <Typography
                sx={{
                    textAlign: "center",
                    pb: 2,
                    pt: 3,
                    fontWeight: 600,
                    color: 'rgb(37, 36, 36, 0.83)'
                }}
                variant="h3"
                noWrap
                component="div"
            >
                হলুদ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={holud} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">ভূমিকা :</p>
                            <p className="card-text">হলুদ মসলা হিসেবে একটি জনপ্রিয় এবং বহুল ব্যবহৃত মসলা ফসল। এছাড়াও হলুদের অনেক ভেষজ গুণও রয়েছে।</p>

                            <p className="card-text fw-bold">উপযুক্ত জমি ও মাটিঃ</p>
                            <p className="card-text">সব ধরনের মাটিতে হলুদ চাষ করা যায়। তবে দো-আঁশ ও বেলে-দো-আঁশ মাটি হলুদ চাষের জন্য অতি উত্তম।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">বীজ বপন : </p>
                <p className="card-text">চৈত্র মাস কন্দ লাগানোর উপযুক্ত সময়। সাধারণতঃ ১৫-২০ গ্রাম ওজনের ১-২টি ঝুঁড়ি বিশিষ্ট কন্দ  লাগাতে হয়। ৫০ সে.মি. দূরে দূরে সারি করে ২৫ সে.মি. দূরে দূরে ৫-৭ সে.মি. গভীরে কন্দ লাগাতে হয়। প্রতি হেক্টরে ২৫০০ কেজি কন্দ প্রয়োজন হয়। কন্দ লাগানোর পর ভেলী করে দিতে হয়।</p>

                <p className="card-text fw-bold">জাত পরিচিতিঃ</p>
                <p className="card-text">ডিমলা ও সিন্দুরী নামে বাংলাদেশে দু’টি উন্নত জাত রয়েছে। ডিমলা জাতটি স্থানীয় জাতের তুলনায় ৩ গুণ ফলন বেশী দেয়। </p>

                <p className="card-text fw-bold">সার ব্যবস্থাপনাঃ</p>
                <p className="card-text">জমির উর্বরতার উপর সারের পরিমাণ নির্ভর করে। সাধারণতঃ প্রতি হেক্টরে সারের পরিমাণ হলোঃ গোবর ৪-৬ টন, ইউরিয়া ২০০-২৪০ কেজি, টিএসপি ১৭০-১৯০ কেজি, এমওপি ১৬০-১৮০ কেজি, জিপসাম ১০৫-১২০ কেজি ও জিংক সালফেট ২-৩ কেজি। জমি তৈরির সময় সমুদয় গোবর, টিএসপি, জিপসাম, জিংক সালফেট ও ৮০ কেজি এমওপি সার মাটির সাথে মিশিয়ে দিতে হয়। কন্দ লাগানোর ৫০-৬০ দিন পর ১০০-১২০ কেজি ইউরিয়া ভেলী হালকাভাবে কুপিয়ে প্রয়োগ করে আবার ভেলী করে দিতে হয়। ১ম কিস্তি-র ৫০-৬০ দিন পর দ্বিতীয় কিস্তির- এবং আরও ৫০-৬০ দিন পর তৃতীয় কিস্তি-র সার উপরি প্রয়োগ করতে হয়। ২য় ও ৩য় কিস্তি-র উপরি সার হিসেবে প্রতি হেক্টরে প্রতিবারে ৫০-৬০ কেজি ইউরিয়া ও ৪০-৪৫ কেজি এমওপি সার প্রয়োগ করতে হয়। ২য় ও ৩য় কিস্তি-র সার সারির মাঝে প্রয়োগ করে কোঁদাল দিয়ে কুপিয়ে মাটির সাথে মিশিয়ে দিতে হবে এবং সামান্য মাটি ভেলীতে দিতে হবে।</p>

                <p className="card-text fw-bold">পোকমাকড় ব্যবস্থাপনা</p>
                <p className="card-text fw-bold">পোকার নাম : ডগা ছিদ্রকারী পোকা</p>
                <p className="card-text fw-bold">ভূমিকা : </p>
                <p className="card-text">কান্ড আক্রমণ করে বলে গাছের বৃদ্ধি ব্যহত হয়। ফলে উৎপাদন কম হয়।<br />
                    <b>পোকা চেনার উপায় : </b>এ পোকার মথ (মা) কমলা হলুদ রংয়ের এবং পাখার উপর কালো বর্ণের ফোটা থাকে। কীড়া হালকা বাদামী বর্ণের। গায়ে সুক্ষ্ণ শুং থাকে।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">পোকা কান্ড ছিদ্র করে ভিতরের দিকে খায় বলে পাতা হলুদ হয়ে যায়। নেক সময় ডেড হার্ট লঙ্গন দেখা যায়। আক্রান্ততা কান্ডে ছিদ্র ও কীড়ার মল দেখা যায়।</p>
                <p><b>অনুকুল পরিবেশ :</b> আদ্র আবহাওয়া। </p>

                <p className="card-text fw-bold">জীবন চক্র : </p>
                <p className="card-text">স্ত্রী মথ পাতা বা গাছের নরম অংশে ডিম পাড়ে। ৭ দিনে ডিম থেকে কীড়া বের হয় এবং ২-৩ সপ্তাহ কীড়া অবস্থায় থাকে। পুত্তলি ধাপ সম্পন্ন করতে ১ সপ্তাহ লাগে।  এরা বছরে ৩ বার বংশ বিস্তার করে।
                    ব্যবস্থাপনা : আক্রান্ত ডগা তুলে ফেলা ও সম্ভব হলে পোকার কীড়া ধরে মেরা ফেলা। প্রতি লিটার পানিতে ৪ মি.গ্রা. হারে বিটি মিশিয়ে স্প্রে করতে হবে। অধিক আক্রমণে অনুমোদিত কীটনাশক প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">আক্রান্ত ডগা তুলে ফেলা ও সম্ভব হলে পোকার কীড়া ধরে মেরা ফেলা। প্রতি লিটার পানিতে ৪ মি.গ্রা. হারে বিটি মিশিয়ে স্প্রে করতে হবে। অধিক আক্রমণে অনুমোদিত কীটনাশক প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">পোকার নাম : রাইজোম স্কেল পোকা</p>
                <p className="card-text fw-bold">ভূমিকা : </p>
                <p className="card-text">এ পোকা রাইজোম (হলুদ) আক্রমণ করে বলে ক্ষেতের আইল থেকে সহজে বুঝা যায় না। ফলে প্রভূত ক্ষতি সাধিত হয়।</p>

                <p className="card-text fw-bold">পোকা চেনার উপায় : </p>
                <p className="card-text">পূর্ণাঙ্গ স্কেল পোকা উজ্জল হলুদ বর্ণের এবং শরীর গোলাকার । এদের শরীর মোমের মত স্কেল দ্ধারা   আবৃত থাকে।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা :</p>
                <p className="card-text">ফসলের শেষ পর্যায়ে রাইজোম এ পোকার আক্রমণ দেখা যায়। পূর্নাঙ্গ ও নিম্ফ পোকা রাইজোমের রস চুষে খায় বলে রাইজোম আকারে ছোট হয়। রাইজোম কুঁচকে যায় ও অঙ্কুরোদগম ক্ষমতা কমে যায়। আক্রান্ত রাইজোম গুদামে রাখলে সেখানে পচন ধরতে পারে।</p>
                <p><b>অনুকুল পরিবেশ : </b>আর্দ্র আবহাওয়া।</p>

                <p className="card-text fw-bold">জীবন চক্র : </p>
                <p className="card-text">স্ত্রী পোকা রাইজোমের উপর হলুদ রংয়ের ডিম পাড়ে। ৭-৮ দিনে ডিম থেকে নিম্ফ (বাচ্চা) বের হয়। ২৪ দিন পর নিম্ফ পূর্ণাঙ্গে পরিণত হয়।  এদের জীবনচক্র সম্পন্ন করতে ৩১-৩৫ দিন সময় লাগে।  বছরে এরা ১০ বার বংশ বিস্তার করে।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">জুলাই- আগস্ট মাসে আক্রান্ত রাইজোম তুলে ধ্বংশ করতে হবে। স্কেল আক্রান্ত রাইজোম বাদ দিয়ে গুদামজাত করতে হবে। মাঠে আক্রমণ দেখা দিলে ও গুদামে রাখার পূর্বে অনুমোদিত কীটনাশক প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">পোকার নাম : বিছা পোকা </p>
                <p className="card-text fw-bold">ভূমিকা : </p>
                <p className="card-text">এ পোকার কীড়া ছোট অবস্থায় একত্রে থাকে ও বড় হলে পুরো মাঠে ছড়িয়ে পড়ে বিধায় প্রাথমিক অবস্থায় এদের দমন করা উচিৎ।</p>

                <p className="card-text fw-bold">পোকা চেনার উপায় : </p>
                <p className="card-text">এটি মথ জাতীয় পোকা এবং কীড়ার শরীর লোমে ঢাকা থাকে। কীড়াগুলো ক্ষতিকারক।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">এ পোকার আক্রমণ মাঝে মাঝে দেখা যায়। কীড়া পাতা ও গাছের নরম অংশ খায় ।  আক্রমনের মাত্রা বেশী হলে পুরো গাছ পাতা বিহীন হয়।</p>
                <p><b>অনুকুল পরিবেশ : </b> বিকল্প পোষক।</p>

                <p className="card-text fw-bold">জীবন চক্র : </p>
                <p className="card-text">স্ত্রী মথ ৪১২-১২৪১ টি ডিম পাড়ে। ৮-১৬ দিনে ডিম হতে কীড়া বের হয়। কীড়া ছোট অবস্থায় দলবদ্ধ থাকে কিন্তু বড় হলে পুরো মাঠে ছড়িয়ে পড়ে।  কীড়া অবস্থায়  ৪ সপ্তাহ থাকার পর পুত্তলিতে পরিণত হয়। ১-২ সপ্তাহ পুত্তলি অবস্থা কাটানোর পর পূর্ণাঙ্গ মথ বেরিয়ে আসে। মথ ১ সপ্তাহ বাঁচে।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">আলোর ফাঁদ দিয়ে মথ আকৃষ্ট করে মারা। কীড়া দলবদ্ধ থাকা কালীন সংগ্রহ করে হাত দিয়ে পিষে মারা। ক্ষেতের মাঝে কঞ্চি পুঁতে পাখি বসার ব্যবস্থা করলে মথ, কীড়া ইত্যাদি ধরে খায়। শিকারী গান্ধী  ও পরজীবী পোকা সংরক্ষণ। আক্রান্ত  ক্ষেতের  চারিদিকে নালা করে কেরোসিন মিশ্রিত পানি রাখলে কীড়াগুলো  ঐ পানিতে পড়ে মারা যায়। সময়মত আগাছা ও মরা পাতা পরিষ্কার করা। নুমোদিত কীটনাশক নির্ধারিত মাত্রায় ব্যবহার করা।</p>

                <p className="card-text fw-bold">পোকার নাম : থ্রিপস</p>
                <p className="card-text fw-bold">ভূমিকা : </p>
                <p className="card-text">এ পোকা ছোট কিন্তু' পাতার রস চুষে খায় বিধায় গাছ দূর্বল হয়ে পড়ে। সে কারনে ক্ষেতের মধ্যে পাতা বিবর্ণ দেখালে কাছে গিয়ে মনোযোগ সহকারে দেখা উচিৎ , তা না হলে ফলন অনেক কমে যাবে।
                    পোকা চেনার উপায় : আকৃতিতে খুব ছোট । স্ত্রী পোকা সরু, হলুদাভ।  পূর্ণ বয়স্ক পুরুষ গাঢ় বাদামী । বাচ্চা সাদা বা হলুদ । এদের পিঠের উপর লম্বা দাগ থাকে।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">এরা রস চুষে খায় বলে আক্রান্ত পাতা রূপালী রং ধারণ করে । আক্রান্ত পাতায় বাদামী দাগ বা ফোঁটা দেখা যায়। অধিক আক্রমণে পাতা শুকিয়ে যায় ও ঢলে পড়ে। রাইজোম আকারে ছোট ও বিকৃত হয়।</p>
                <p><b>অনুকুল পরিবেশ : </b> বিকল্প পোষক।</p>

                <p className="card-text fw-bold">জীবন চক্র : </p>
                <p className="card-text">স্ত্রী পোকা পাতার কোষের মধ্যে ৪৫-৫০ টি ডিম পাড়ে।
                    ৫-১০ দিনে ডিম হতে নিম্ফ (বাচ্চা) বের হয়। নিম্ফ ১৫-৩০ দিনে দুটি ধাপ অতিক্রম করে । প্রথম ধাপে খাদ্য গ্রহণ করে  এবং দ্বিতীয় ধাপে খাদ্য গ্রহণ না করে মাটিতে থাকে । এরা বছরে ৮ বার বংশ বিস্তার করে। এবং স্ত্রী পোকা পুরুষ পোকার সাথে মিলন ছাড়াই বাচ্চা দিতে সক্ষম ।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">সাদা রংয়ের আঠালো ফাঁদ ব্যবহার। ক্ষেতের মাকড়সার সংখ্যা বৃদ্ধি করে এ পোকা দমন করা যায়। অনুমোদিত কীটনাশক নির্ধারিত মাত্রায় প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহঃসাধারণতঃ </p>
                <p className="card-text">লাগানোর ৯-১০ মাস পর পাতা শুকিয়ে গেলে হলুদ সংগ্রহ করা হয়। প্রতি হেক্টরে ২৫-৩০ টন কাঁচা হলুদ পাওয়া যায়।</p>

                <p className="card-text fw-bold">ব্যবহার : </p>
                <p className="card-text">মসলা হিসেবে বিভিন্ন প্রকার রান্নার কাজে হলুদ ব্যবহার করা হয়। রুপ চর্চায়ও এর ব্যবহার রয়েছে।</p>

                <p className="card-text fw-bold">ভেষজগুণঃ</p>
                <p className="card-text">
                    - পাকস্থলীর গ্যাস নিবারণ করে;<br />
                    - মুত্রনালীর রোগ নিবারণ করে থাকে;<br />
                    - ক্ষত শুকাতে ও থাকে;<br />
                    - ব্যাথা নিবারণে ব্যবহৃত হয়।</p>


            </div>
        </div >


    );
};

export default HoludInfo;