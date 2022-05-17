import React from 'react';
import { Divider, Typography } from '@mui/material';
import akh from '../../../../../images/Agri-info/crops/Sugarcane_আখ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const AkhInfo = () => {

    // dynamic title
    useDocumentTitle("আখ");

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
                আখ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={akh} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text">আখ বাংলাদেশের একটি অন্যতম প্রধান অর্থকরী ফসল৷ পাট ও তামাকের মতো আখও চাষীদেরকে নগদ অর্থে আজকাল পাট চাষের চেয়ে আখ চাষ অধিক লাভজনক বলে চাষীরা পাটের চেয়ে আখ চাষেই বেশি গুরুত্ব দিচ্ছেন৷ বাংলাদেশের প্রতিটি জেলাতেই কিছু না কিছু আখের চাষ হয়, তবে জলবায়ুর প্রভাব অনুযায়ী দেশের উত্তরাঞ্চলের জেলাগুলো আখ চাষের জন্য উপযোগী৷</p>
                            <p className="card-text"><b>উদ্ভিদতাত্ত্বিক বৈশিষ্ট্য :</b> <br />
                                • আখ পরিবারভুক্ত ঘাস জাতীয় l দণ্ডাকৃতির ডাল পালাহীন একবর্ষ বা বহুবর্ষজীবী উদ্ভিদ৷<br />
                                • গাছের পাতা কিছুটা ভুট্টার পাতার ন্যায় তবে অধিকতর শক্ত ও খাড়া, সুচালো ও কিনারা ধারযুক্ত৷</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>• আখদন্ড উচ্চতায় ১.৮৫-৩.৭২ মিটার পর্যন্ত এমনকি ঌ.৩ মিটার পর্যন্ত হয়৷<br />
                    • দন্ডের কোনোটি নরম এবং কোনোটি শক্ত, তবে সব দন্ডই গিটযুক্ত ৷<br />
                    • আখ দণ্ডের কোনোটির হালকা, বেগুনি, কোনোটি সবুজ ও কোনোটি হলদে সবুজ বংয়ের হয়ে থাকে৷<br />
                    • সকল জাতের আখ গাছেই ফুল হয় না, যেসব জাতে হয় সেগুলোতে গাছের আগায় কাশফুলে মতো সাদা ধবধবে ফুলের শীষ বের হয় ফুলে খুব ছোট ধরনের বীজ ধরে সেগুলো খালি চোখে দেখা যায় না৷</p>
                <p>প্রয়োজনের তুলনায়বাংলাদেশে চিনির উত্‌পাদন খুবই কম৷ এর প্রধান কারণ আখের হেক্টর প্রতি উত্‌পাদন ও মিলে চিনির উত্‌পাদন হার পৃথিবীর অন্যান্য দেশের তুলনায় অত্যন্ত কম৷ অধিক উত্‌পাদনশীল আখের জাতের অভাবও আর একটি কারণ৷ অন্যান্য কারণ হলো উপযুক্ত সময়ের আগে বা পরে আখ কাটা, মারে আখ মাটিতে পড়ে ও শুকিয়ে যাওয়া, চিনিকলে পৌছাতে বা গ্রহণ করতে করতে আখ শুকিয়ে যাওয়া এবং কোনো কোনা সময় কারখানার কারিগরি ভুলত্রুটি ইত্যাদি৷ তবে বিশেষজ্ঞদের মতে বাংলাদেশের মাটি ও জলবায়ু আখ চাষের জন্য বেশ উপযোগী৷ উপযুক্ত অসুবিধা কাটিয়ে উঠে আধুনিক তথা বিজ্ঞানসম্মত উপায়ে চাষ করলে এদেশে প্রতি হেক্টরে ১৩৫-১৩৬ টন আখ অনায়াসেই উত্‌পন্ন হতে পারে৷ একইভাবে বলা যায়, চিনিকলের কার্যক্ষমতা ও দক্ষতার উন্নতি সাধন হলে দেশে চিনি উৎপাদনের যথেষ্ট অগ্রগতি হবে৷</p>
                <p><b>আঁখের চাষাবাদ পদ্ধতি:</b></p>
                <p className="card-text"><b>চাষের উপযুক্ততা:</b><br />চাষের মৌসুম : অক্টোবর-এপ্রিল (কার্তিক-চৈত্র) এই দীর্ঘ সময়ের মধ্যে রোপণ করা যায় ৷ তবে আগাম রোপনই উত্তম, কারণ এই সময়ে রোপণ করলে- <br />
                    • আঁখ যথেষ্ট বৃদ্ধি হয়ার সুযোগ পায়,<br />
                    • আঁখের অংকুর উদ্গম ঠিকমত হয়, এবং<br />
                    • আঁখের সাথে সাথি ফসল চাষ করা যেতে পারে</p>
                <p className="card-text"><b>উপযুক্ত জলবায়ু</b><br />আখের জন্য গ্রীষ্ম ও অবগ্রীষ্মমণ্ডলীয় জলবায়ু উপযোগ৷ বেশি গরম ও ঠাণ্ডা উভয়েই আখের জন্য ক্ষতিকর৷ বাস্তবিকপক্ষে গড়পড়তা দৈনিক ২৫ সেন্টিগ্রেড তাপমাত্রা আখ চাষের জন্য সর্বোত্তম৷ আখের বৃদ্ধি ৩১ (সে. তাপমাত্রায় থেকে যায় এবং ১১) সে. এর নিচে ক্ষতিগ্রস্ত হয়৷ মাঝারি ধরনের বৃষ্টিপাত অর্থাত্ ১৭৮০-২০৩০ সেন্টিমিটার বৃষ্টিপাত আখ চাষের জন্য ভালো৷ ৬০ ইঞ্চি অর্থাত্ ১৫২০ সেন্টিমিটার এর কম বৃষ্টি ভালো নয়৷ তবে সেচের সাহায্যে ৬৩০-৭৬০ মিলিমিটার বৃষ্টিপাত হয় এমন অঞ্চলেও আখ জন্মানো যায়৷</p>
                <p className="card-text"><b>মাটির ধরন</b><br />এঁটেল, দোঁআশ ও এঁটেল-দোঁআশ মাটিতে আখ ভালো জন্মে৷ গভীর পলিমাটিতেও আখ ভালো উত্‌পন্ন হয়৷ বেলে ও ইট পাটকেলযুক্ত মাটিতে আখ মোটেই ভালো হয় না৷ আখের জমি উচু ও সমতল হওয়া বাঞ্ছনীয়৷ যেসব নিচু জমিতে সহজেই পানি জমে যায় এবং পানির নিঃসরণ ভালো হয় না সেসব জমি আখ চাষের উপযোগী নয়৷</p>
                <p className="card-text"><b>চাষের জন্য উপযুক্ত অঞ্চল</b><br />বাংলাদেশের প্রতি জেলাতেই কিছু না কিছু আখের চাষ হয়, তবে জলবায়ুর প্রভাব অনুযায়ী দেশের উত্তরাঞ্চলের জেলাগুলো আখ চাষের জন্য উপযোগী৷ তাই দেখা যায় রাজশাহী, রংপুর দিনাজপুর, যশোহর ও কুষ্টিয়া জেলায় প্রচুর আখ জন্মে৷ দক্ষিণ-পূর্বাঞ্চলের জেলাগুলো মধ্যে ফরিদপুর, ঢাকা ও জামালপুরেও আখের আবাদ ভালো হতে দেখা আছে৷</p>
                <p className="card-text"><b>জমি তৈরি পদ্ধতি</b><br />আখের জমি ৩/৪ বার চাষ ও বার কয়েক মই দিয়ে প্রস্তুত করতে হয়৷ জমি তত সূক্ষ্নভাবে/ খুব মিহি করে চাষ করার প্রয়োজন হয় না৷ পূর্ববতী ফসল আখ হলে সে ফসলের গোড়া জমি হতে উঠিয়ে অন্যত্র ফেলে দিতে হবে৷ যেহেতু আখের জমিতে পানি নিষ্কাশনের ব্যবস্থা থাকা প্রয়োজন সেজন্য সমস্ত জমিকে ৫০ ফুট অর্থাত্ ১৫.১ মিটার প্রশস্ত ও ১০০-২০০ ফুট অর্থাত্ ৩১-৬২ মিটার দৈর্ঘ্য ফালিত ভাগ করে নিলে নিষ্কাশনের  জন্য নালা কাটা সুবিধাজনক হয়৷</p>
                <p>আখ চাষের জন্য জমি দু–পদ্ধতিতে প্রস্তুত করা যায়, যথা-</p>
                <p className="card-text"><b>জমি তৈরি পদ্ধতি</b><br />আখের জমি ৩/৪ বার চাষ ও বার কয়েক মই দিয়ে প্রস্তুত করতে হয়৷ জমি তত সূক্ষ্নভাবে/ খুব মিহি করে চাষ করার প্রয়োজন হয় না৷ পূর্ববতী ফসল আখ হলে সে ফসলের গোড়া জমি হতে উঠিয়ে অন্যত্র ফেলে দিতে হবে৷ যেহেতু আখের জমিতে পানি নিষ্কাশনের ব্যবস্থা থাকা প্রয়োজন সেজন্য সমস্ত জমিকে ৫০ ফুট অর্থাত্ ১৫.১ মিটার প্রশস্ত ও ১০০-২০০ ফুট অর্থাত্ ৩১-৬২ মিটার দৈর্ঘ্য ফালিত ভাগ করে নিলে নিষ্কাশনের  জন্য নালা কাটা সুবিধাজনক হয়৷</p>
                <p className="card-text"><b>সমতল বা ভাওর পদ্ধিত:</b><br /> এ পদ্ধতিতে ফালি ফালি জমিতে লাঙ্গল দিয়ে ৪৫.৫-৬১ সেন্টিমিটার দূরে দূরে ভাওর করা হয় । তারপর সে ভাওরে আখের টুকরা (sett) বপন করা হয়। তবে এ পদ্ধতির বেশ কিছু ত্রুটি রয়েছে। যে কারণে আমাদের দেশে হেক্টর প্রতি আখের ফলন কম হয়। দেশী লাঙ্গলের সাহায্যে “ভাওর” করা হয় বলে গভীরতা খুব একটা হয় না এবং সব জায়গায় সমান হয় না। ফলে লাগানো পর বীজ -আখ প্রায়ই জমির উপর ভেসে থাকতে দেখা যায়। উপরন্তু চৈত্র-বৈশাখ মাসের খরার ফলে মাটিতে রসের অভাবে অনেক সংখ্যক বীজ আখের টুকরা হতে চারা গজাতে পারে না। চারার শিকড় আবার মাটির বেশ উপরিভাগে থাকে বিধায় ঝড়-বৃষ্টির দাপেট সহজেই লুটিয়ে পড়ে।</p>
                <p className="card-text"><b>নালা বা পরীক্ষা পদ্ধতি :</b><br /> এ পদ্ধতি বিজ্ঞানসম্মত৷ এ পদ্ধতিতে ফালি জমিতে ১ মিটার দূরে দূরে নালা কাটতে হয়৷ ভাওর পদ্ধতিতে আখ চাষের যে সমস্ত অসুবিধা আছে নালা পদ্ধতিতে সেগুলোর অনেকটাই থাকে না৷ জমির উপরিভাগ শুষ্ক হয়ে গেলেও নালাতে বেশ রস থাকে, ফলে বীজ হতে চারা গাজানো সহজ হয়৷ তদুপরি সার, পানি গাছের গোড়ায় পৌঁছানো সুবিধাজনক৷ প্রতিটি নালার মাপ হবে উপর বা মুখ ৩১ সেন্টিমিটার প্রশস্ত. নিচ বা তলা ২৩ সেন্টিমিটার প্রশস্ত এবং লম্বায় ৩১-৬২ মিটার ৷ নালা আস্তে আস্তে মাটি দ্বারা ভরাট হওয়ার ফলে গাছের গোড়া খুব দৃঢ়ভাবে মাটিতে আটেক থাকে৷ ফলে ঝড় বা বাতাসে আখ সহজে মাটিতে পড়ে যায় না৷ অধিকন্তু এই পদ্ধতিতে মুড়ি আখ ভালোভাবে জণ্মানো যায়৷</p>
                <p className="card-text"><b>বীজ বপন পূর্বে করণীয় <br />বীজ নির্বাচন ও সংগ্রহ :</b><br /> আখের বীজ বলতে আখের ছোট ছোট টুকরাকেই বোঝায়৷ যে আখ ফসলে রোগ পোকার আক্রমণ ও ভিন্ন জাতের মিশ্রণ নেই সে যেন ফসল হতেই বীজ সংগ্রহ করা শ্রেয়৷ একটি আখ দণ্ডের দিক হতে বীজ সংগ্রহ করা ভালো, কারণ আগার দিকের বীজ হতেই ভলো চারা গজায়৷ তাই আগের দিনে চাষীরা শুধু আখের আগা হইতে একটি মাত্র চারা বা বীজ সংগ্রহ করতেন৷ আসলে নিচের দিকের কিছু অংশ বাদ দিয়ে সমস্ত আখটাই বীজ হিসেবে ব্যবহার করা যায়৷ তাই পৃথিবীর কোনো কোনো দেশে সম্পূর্ণ আখটাই নালায় লম্বালম্বি ফেলে মাটি দিয়ে ঢেকে দেওয়া হয়৷ বীজের জন্য কোনো ক্ষেতের আখ নির্বাচন করার পর সেখান হতে বীজ সংগ্রহ করা হয়৷ প্রতিটি আখ ধারালো দার সাহায্যে টুকরা টুকরা করতে হয়৷ প্রতি টুকরাতে তিনটি করে চোখ *</p>
                <p className="card-text"><b>বীজ শোধন</b><br />আখের বীজ জমিতে লাগাবার আগে শোধন করা একান্ত প্রয়োজন৷ তাতে বীজ ছাড়া ছত্রাক ও অন্যান্য জীবাণুর আক্রমণ হতে রক্ষা পেয়ে সুষ্ঠুরূপে অংকুরিত হতে পারে৷ অন্যথায় বীজ লাল পঁচা, স্মাট, রাষ্ট প্রভৃতি রোগে আক্রান্ত হয়ে পড়ায় অন্কুরোদগম ব্যাহত হয় এবং চারাগাছ আস্তে আস্তে নিস্তেজ হয়ে পড়ে৷ বীজ শোধনের জন্য যেসব ঔষধ পাওয়া যায় সেগুলোর মধ্যে এরেটান-৬ ও এগালল উল্লেখযোগ্য৷ আধাসের এরেটান-৬ দুই মণ বিশ সের পরিষ্কার পানিতে ভালো করে মিশিয়ে দিয়ে তাতে বীজের দুই কাটা প্রার ডুবিয়ে নিতে হয়৷ এগালল আধাসের পরিমাণ ১ মণ-১০ সের পরিষ্কার পানিতে ভালো করে মিশিয়ে নিতে হবে৷ এই মিশ্রিত পানিতে ৫ মিনিটকাল বীজ ডুবিয়ে রেখে জমিতে লাগাতে হবে৷ অধুনা টেকেটা বা ব্যাভিষ্টিন নামক ঔষধ দ্বারা বীজ শোধন করা হয়৷</p>
                <p className="card-text"><b>বীজ বপন</b><br />বীজ বপন পদ্ধতি: কার্তিক-অগ্রহায়ণ হতে শুরু করে ফাল্গুন-চৈত্র মাস পর্যন্ত আখ বপন করা যায়৷ তবে প্রথমোক্ত সময়টিই শ্রেয়৷ নালায় বা ভাওরে কয়েক পদ্ধতিতে বীজ লাগানো যায়৷ মাটির রস, বীজের অবস্থা ও পরিমাণের উপর নির্ভর করে কোনো এক পদ্ধতিতে বীজ বপন করতে হয়৷ বীজ নিম্নবর্ণিত কয়েকটি পদ্ধতিতে বপন করা যায়:</p>
                <p>• মাথায় মাথায় বপন পদ্ধতি: এই নিয়মে একটি বীজ বা টুকরার মাথা অপর একটি টুকরার মাথার কাছাকাছি রেখে বহন করতে হয়৷<br />
                    • আকাবাঁকা পদ্ধতি: এই নিয়মে একটি বীজের মাথা অপর আরেকটি বীজের মাথার সঙ্গে বাঁকা অর্থাৎ কোনো পরে লাগাতে হয়৷<br />
                    • দেড়া পদ্ধতি: এই পদ্ধতিতে দুটি টুকরা মাথা মাথায় (১ম পদ্ধতির মতো লাগানোর পর একটি টুকরা সেই দুই মাথা বরাবর সমান্তরাল করে লাগান হয় ৷ অবশ্য এ প্রথায় নালায় দু সারিতে বীজ বপন করতে হয়৷<br />
                    • সমান্তরাল পদ্ধতি: এই নিয়মে প্রথম পন্থাটির ন্যায় এক সারির স্থলে দুই সারি বীজ পাশাপাশি সমান্তরাল করে বপন করতে হয়
                    উপরে বর্ণিত যে পন্থা বা পদ্ধতিতেই বীজ বপন করা হোক না কেন তার প্রধান উদ্দেশ্য জমিতে যেন বীজের অন্কুরোদগম আশানুরূপ হয়৷ সেজন্য পদ্ধতিগত সুবিধা যাই থাকুক না কেন সব চাইতে বড় কথা হলো নালার মাটিতে বীজ বপন করার পর বীজের চোখ যে মাটি স্পর্শ করে থাকতে হবে৷ সঠিকভাবে বীজ লাগাবার পর ২/৩ ইঞ্চি অর্থাৎ ৫-৭.৫০ সেন্টিমিটার মাটি দিয়ে বীজ ঢেকে দিতে হবে৷</p>
                <p className="card-text"><b>বীজের হার </b><br />একর প্রতি ২০-৪০ অর্থাৎ হেক্টর প্রতি ৩.৭৫-৪.৭৫ টন বীজ লাগে৷ এক নালা থেকে অন্য নালার দূরত্ব ১.২৫ মি.হলে প্রতি হেক্টরে ৩০০০০ টি এবং দূরত্ব ১ মিটার হলে ৩৭৫০০ টি তিন বিশিষ্ট বীজ অর্থাত্ আখের টুকরা লাগবে৷ অবশ্য নালায় বীজ বপনের পদ্ধতি বিভিন্ন হলে বীজের হারে কিছুটা তারতম্য হবে৷ রোপা আখ চাষে বীজের পরিমাণ প্রচলিত পদ্ধতির চেয়ে অনেক কম লাগে, যেমন প্রতি হেক্টরে ১.ঌ টন বীজ৷</p>
                <p className="card-text"><b>সেচ ব্যবস্থাপনা:</b><br />যদি বীজ বপনের পর দেখা যায় যে ১০/১৫ দিনের মধ্যেও অন্কুর বের হচ্ছে না তা হলে হালকা ধরনের সেচ দেওয়া ভালো৷ আখ চাষীরা সাধারণত আখ ফসলে পানি সেচ দেয় না৷ কিন্তু উত্তম ফলনের জন্য জমিতে সেচ দেওয়া অত্যাবশ্যক৷ আখ দীর্ঘস্থায়ী ফসল, প্রায় এক বত্‌সরকাল তা মাঠে থাকে৷ এই দীর্ঘ সময়ের মধ্যে অন্তত দুটি সময়ে পানি ফসলটির জন্য পানি বিশেষভাবে প্রয়োজন হয়৷ প্রথমবার জমিতে বীজ বপন ও চারার প্রাথমিক বৃদ্ধির সময় এবং দ্বিতীয়বার কার্তিক মাসে যখন বৃষ্টির অভাবে জমির রস দ্রুত কমতে থাকে তখন৷ সুতরাং আখের ভালো ফলনের জন্য কমপক্ষে দুবার এবং প্রয়োজনবোধে ততোধিক বার সেচ দেওয়া বাঞ্ছনীয়৷ </p>
                <p className="card-text"><b>আগাছা দমন ও মাটি আলগা করা</b><br /> আখের জমিতে প্রচুর পরিমাণে আগাছা জন্মে। সময়মতো তা নিধন করা প্রয়োজন। দুই থেকে তিনবার আগাছা পরিষ্কার করার প্রয়োজন হতে পারে। সে সাথে নালার মাটি নরম করে দিতে হয়। সেচ বা বৃষ্টির পর রৌদে নালার মাটির উপরিভাগে শক্ত আবরণের সৃষ্টি হতে পারে। এতে চারা গজানো ও এর বৃদ্ধি বাধাপ্রাপ্ত হয়। এই পরিস্থিতিতে নিড়ানির সাহায্যে সেই আবরণ ভেঙ্গে দিয়ে মাটি নরম করে দিতে হয়। </p>
                <p className="card-text"><b>অন্যান্য পরিচর্যা</b><br />গাছের গোড়ায় মাটি দেওয়া : আখের গোড়ায় মাটি দেওয়া অত্যাবশ্যক৷ চারার উচ্চতা যখন ২-৩ ফুট অর্থাত্‌ ৬০-ঌ০ সেন্টিমিটার হয় তখনই প্রথমবারের মতো মাটি দিতে হয়৷ দুই সারির মাঝখানে যে মাটি জমা থাকে সেই মাটিই গোড়ায় দেওয়ার কাজে ব্যবহৃত হয়৷ ইউরিয়া ও সরিষার খৈল প্রয়োগ করার পরেই গোড়ায় মাটি দেওয়ার কাজটি করতে হয়৷ আখের জমিতে সাথী ফসল থাকলে সেই ফসলটি উঠানোর পরই এই মাটি দেওয়ার কাজটি সমাধাণ করতে হয়৷ দ্বিতীয়বার গোড়ায় মাটি দিতে হয় আষাঢ়-শ্রাবণ মাসে৷ এই সময় শেষ বারের মতো ইউরিয়া সারটুকু প্রয়োগ করতে হয়৷ শেষবারের মতো মাটি দেওয়ার ফলে আখের ক্ষেত্রে লক্ষ করলে দেখা যাবে যে দুই সারির মাঝখানে যেখানে মাটি উচু হয়েছিল সেইস্থলে নিচু নালার সৃষ্টি হয়েছে আর আখের গোড়ার জমি বেশ উচু হয়ে উঠেছে৷ বর্ষাকালীন পানি এই নালাপথে সহজেই নিষ্কাশিত হয় আর গাছের গোড়া শক্ত হওয়ার ফলে ঝড়-ঝাপটায় সহজেই লুটিয়ে পড়ে না৷</p>
                <p>আখের জমি একটু নিচু বা অসমান হলে বর্ষার সময় ক্ষেতে পানি জমে যাবার সম্ভাবনা থাকে৷ নিষ্কাশনের সুবন্দোবস্ত করে বৃষ্টি অথবা সেচের অতিরিক্ত পানি বের করে দিতে হবে৷ নচেত্‌ আখের বৃদ্ধি স্থগিত হয়ে যাবে, নানা প্রকার রোগ দেখা দিবে এবং চিনি ও গুড়ের উত্‌পাদন কমে যাবে৷</p>
                <p>আখের ঝোপে অনেক দিন পর্যন্ত কুশি বের হয়৷ পরিপক্ক কুশির আখ কাটার সময় অল্প বয়স্ক অর্থাৎ‌ অপরিপক্ক কুশির আখ এক সঙ্গে কেটে মাড়াই করলে তা হতে নিম্নমানের রস ও চিনি উত্পন্ন হয়৷ সেইজন্য ২/৩ মাস পরে যে সমস্ত কুশি বের হয় সেগুলো কেটে ফেলা উচিত৷</p>

            </div>
        </div >

    );
};

export default AkhInfo;