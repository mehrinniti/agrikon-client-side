import React from 'react';
import { Divider, Typography } from '@mui/material';
import vutta from '../../../../../images/Agri-info/crops/maiz_ভুট্টা.jpg'
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';


const VuttaCrops = () => {

    // dynamic title
    useDocumentTitle("ভুট্টা");

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
                // className="mx-5"
                variant="h3"
                noWrap
                component="div"
            >
                ভুট্টা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={vutta} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">পুষ্টি মূল্যঃ </p>
                            <p className="card-text">ধান ও গমের তুলনায় ভুট্টার পুষ্টিমান বেশী। এতে প্রায় ১১% আমিষ জাতীয় উপাদান রয়েছে। আমিষে প্রয়োজনীয় এ্যামিনো এসিড, ট্রিপটোফ্যান ও লাইসিন অধিক পরিমানে আছে। এছাড়া হলদে রংয়ের ভুট্টা দানায় প্রতি ১০০ গ্রামে প্রায় ৯০ মিলিগ্রাম ক্যারোটিন বা ভিটামিন "এ" থাকে।</p>

                            <p className="card-text fw-bold">ভেষজ গুনঃ</p>
                            <p className="card-text"><b>ব্যবহারঃ</b> ভুট্টার দানা মানুষের খাদ্য হিসেবে এবং ভুট্টার গাছ ও সবুজ পাতা উন্নত মানের গোখাদ্য হিসেবে ব্যবহৃত হয়। হাঁস-মুরগি ও মাছের খাদ্য হিসেবেও এর যথেষ্ট গুরূত্ব রয়েছ। শুধু পশু, মুরগির খামার ও মাছের চাহিদা মিটানোর জন্যই বছরে প্রায় ২ লক্ষ ৭০ হাজার টন ভুট্টা দানা প্রয়োজন। বাংলাদেশে ভুট্টার জমি দ্রুত বাড়ছে।</p>


                        </div>
                    </div>
                </div>
            </div>


            <div className='text-start pb-5'>


                <p className="card-text fw-bold">উপযুক্ত জমি ও মাটিঃ </p>
                <p className="card-text">বেলে দোআশ ও দোআশ মাটি ভুট্টা চাষের জন্য উপযোগী। লক্ষ্য রাখতে হবে যেন জমিতে পানি জমে না থাকে।</p>

                <p className="card-text fw-bold">জাত পরিচিতিঃ </p>
                <p className="card-text">ভুট্টার জাত সংগ্রহ ও বাছাই করনের মাধ্যমে বিএআরআই আজ পর্যন্ত বেশ কয়েকটি উন্নত জাত উদ্ভাবন করেছে বাংলাদেশের ক্রমবর্ধমান চাহিদা মিটাতে বহুমুখী ব্যবহারের উপযোগী ভুট্টা জাতের চাষের সম্ভবনা খুবই উজ্জ্বল।</p>

                <p className="card-text fw-bold">ভুট্টার জাতঃ</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-৫:</b> আমিষ সমৃদ্ধ উচ্চ ফলনশীল হাইব্রিড জাত যা ২০০৪ সালে অনুমোদন করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪০-১৪৫ দিন ও খরিপ মৌসুমে ৯৫-১০৫ দিন। জাতটির দানা উজ্জ্বল আকর্ষণীয় কমলা রঙের, ফ্লিন্ট প্রকৃতির এবং হাজার দানার ওজন ২৯০-৩১০ গ্রাম। হেক্টরপ্রতি ফলন রবি মৌসুমে ৯-১০ টন এবং খরিফ মৌসুমে ৭-৭.৫ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-৭: </b>আন্তর্জাতিক গম ও ভুট্টা উন্নয়ন কেন্দ্র হতে সংগ্রহীত ও বাছাইকৃত পিতৃ-মাতৃ লাইন হতে একমুখী সংকরায়ণ করে এ জাতটি উদ্ভাবিত হয়েছে এবং ২০০৬ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৩৫-১৪১ দিন ও খরিপ মৌসুমে ৯৫-১০০ দিন। জাতটির দানা আকর্ষণীয় হলুদ রঙের, ফ্লিন্ট প্রকৃতির এবং হাজার দানার ওজন ৩৭০-৩৯০ গ্রাম। হেক্টরপ্রতি ফলন রবি মৌসুমে ১০.৫-১১.৫ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-৯: </b>আন্তর্জাতিক গম ও ভুট্টা উন্নয়ন কেন্দ্র হতে সংগ্রহীত ও বাছাইকৃত পিতৃ-মাতৃ লাইন হতে একমুখী সংকরায়ণ করে এ জাতটি উদ্ভাবিত হয়েছে এবং ২০০৭ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪৫-১৫০ দিন ও খরিপ মৌসুমে ১০৫-১১০ দিন। জাতটির দানা আকর্ষণীয় হলুদ রঙের, ডেন্ট প্রকৃতির এবং হাজার দানার ওজন ৩৭০-৩৭৫ গ্রাম। হেক্টরপ্রতি ফলন রবি মৌসুমে ১১.৫-১২.৫ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-১০: </b>আন্তর্জাতিক গম ও ভুট্টা উন্নয়ন কেন্দ্র হতে সংগ্রহীত ও বারির নিজস্ব উদ্ভাবিত ইনব্রিড লাইনের সংকরায়ণ করে এ জাতটি উদ্ভাবিত হয়েছে এবং ২০০৯ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪৫-১৫০ দিন ও খরিপ মৌসুমে ১০০-১১০ দিন। জাতটির দানা আকর্ষণীয় হলুদ রঙের, ফ্লিন্ট প্রকৃতির। হেক্টরপ্রতি ফলন রবি মৌসুমে ১০-১১.৫ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-১১: </b>আন্তর্জাতিক গম ও ভুট্টা উন্নয়ন কেন্দ্র হতে সংগ্রহীত ও বাছাইকৃত পিতৃ-মাতৃ লাইন হতে একমুখী সংকরায়ণ করে এ জাতটি উদ্ভাবিত হয়েছে এবং ২০০৯ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৫০-১৫৫ দিন। জাতটির দানা  হলুদ রঙের, ফ্লিন্ট প্রকৃতির। হেক্টরপ্রতি ফলন রবি মৌসুমে ১০.৫-১১.৫ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-১২: </b>স্বল্প সেচে উৎপাদনক্ষম এবং মধ্যমাত্রার খরা সহিষ্ণু উচ্চ ফলনশীল সাদা দানা বিশিষ্ট ফ্লিন্ট প্রকৃতির জাত। এটি ২০১৬ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪০-১৪৫ দিন। খরা অবস্থায় একটি মাত্র সেচ প্রয়োগে (ফল আসার আগে) জাতটির ফলন হেক্টরপ্রতি  ৮.১-৮.৫ টন এবং স্বাভাবিক সেচ প্রয়োগে ফলন হেক্টরপ্রতি ১০-১১.১ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-১৩: </b>স্বল্প সেচে উৎপাদনক্ষম এবং  মধ্যমাত্রার খরা সহিষ্ণু উচ্চ ফলনশীল সাদা দানা বিশিষ্ট ফ্লিন্ট প্রকৃতির জাত। এটি ২০১৬ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪৫-১৫২ দিন। খরা অবস্থায় একটি মাত্র সেচ প্রয়োগে (ফল আসার আগে) জাতটির ফলন হেক্টরপ্রতি  ৮.২-৮.৯ টন এবং স্বাভাবিক সেচ প্রয়োগে ফলন হেক্টরপ্রতি ১০.১-১১.২ টন। মোচা পরিপক্ক হওয়ার পরও জাতটির গাছ ও পাতা সবুজ থাকে যা গো-খাদ্য হিসাবে ব্যবহারের উপযোগী।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-১৪: </b>জাতটি খরিফ মৌসুমে ফুল আসার পর্যায়ে অধিক তাপ সহিষ্ণু এবং মধ্যম ফলন ক্ষমতা সম্পন্ন। এটি ২০১৭ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪০ দিন এবং খরিফ মৌসুমে ১১৫ দিন। জাতটি দানা সাদা বর্ণের এবং সেমি ডেন্ট প্রকৃতির। জাতটি পাতা ঝলসানো রোগ সহনশীল। হেক্টরপ্রতি গড় ফলন রবি মৌসুমে ১০.৮৪ টন এবং খরিফ মৌসুমে ১০.৫২ টন।</p>
                <p className="card-text"><b>বারি হাইব্রিড ভুট্টা-১৫: </b>জাতটি খরিফ মৌসুমে ফুল আসার পর্যায়ে অধিক তাপ সহিষ্ণু এবং উচ্চ ফলন ক্ষমতা সম্পন্ন। এটি ২০১৭ সালে অবমুক্ত করা হয়। এ জাতটির জীবনকাল রবি মৌসুমে ১৪৮ দিন এবং খরিফ মৌসুমে ১২১ দিন। জাতটির দানা হলুদ বর্ণের এবং সেমি ডেন্ট প্রকৃতির। জাতটি পাতা ঝলসানো রোগ সহনশীল। হেক্টরপ্রতি গড় ফলন রবি মৌসুমে ১২.৭৫ টন এবং খরিফ মৌসুমে ১২.০৭ টন। পরিপক্ক অবস্থায় জাতটির বেশির ভাগ পাতা সবুজ থাকে বিধায় গো-খাদ্য হিসাবে ব্যবহার উপযোগী।</p>
                <p className="card-text"><b>বারি মিষ্টি ভুট্টা-১: </b>থাইল্যান্ড থেকে সংগৃহীত জার্মপ্লাজম হতে বাছাই প্রক্রিয়ার মাধ্যমে এ জাতটি নির্বাচন করা হয় এবং ২০০২ সালে অনুমোদিত হয়। মিষ্টি ভুট্টা কাঁচা অবস্থায় খাওয়া হয়। তাই দানা যখন নরম থাকে তখনই মোচা সংগ্রহ করতে হয়। সিল্ক বের হবার ২০-২৫ দিনের মধ্যে অর্থাৎ বপনের মাত্র ১১৫-১২০ দিনে খাওয়ার উপযোগী মোচা সংগ্রহ করা যায়। এর হলুদ দানা প্রচুর পরিমাণে ভিটামিন-এ সমৃদ্ধ। জাতটির ফলন রবি মৌসুমে হেক্টরপ্রতি ১০-১০.৫ টন (খোসা ছাড়ানো কচি মোচা) এবং প্রায় ২৫টন/হেক্টর সবুজ গো-খাদ্য পাওয়া যায়।</p>

                <p className="card-text fw-bold">বপনের সময়ঃ </p>
                <p className="card-text">বাংলাদেশে রবি মৌসুমে মধ্য-আশ্বিন থেকে মধ্য অগ্রহায়ণ (অক্টোবর-নভেম্বর) এবং খরিফ মৌসুমে ফাল্গুন থেকে মধ্য-চৈত্র (মধ্য ফেব্রুয়ারী-মার্চ) পর্যন্ত সময় বীজ বপনের উপযুক্ত সময়।</p>

                <p className="card-text fw-bold">সার প্রয়োগ পদ্ধতিঃ </p>
                <p className="card-text">জমি তৈরীর শেষ পর্যায়ে অনুমোদিত ইউরিয়ার এক তৃতীয়াংশ এবং অন্যান্য সারের সবটুকু ছিটিয়ে জমি চাষ দিতে হবে। বাকি ইউরয়া সমান ২ কিস্তিতে প্রয়োগ করতে হবে। প্রথম কিস্তি বীজ গজানোর ২৫-৩০ দিন পর এবং দ্বিতীয় কিস্তি বীজ গজানোর ৪০-৫০ দিন পর উপরি প্রয়োগ করতে হবে। চারা গজানোর ৩০ দিনের মধ্যে জমি থেকে অতিরিক্ত চারা তুলে ফেলতে হবে। চারার বয়স এক মাস না হওয়া পর্যন্ত জমি আগাছামুক্ত রাখতে হবে।</p>

                <p className="card-text fw-bold">সেচ ও আগাছা ব্যবস্থাপনাঃ </p>
                <p className="card-text">উচ্চ ফলনশীল জাতের ভুট্টার আশানুরূপ ফলন পেতে হলে রবি মৌসুমে সেচ প্রয়োগ অত্যাবশ্যক। উদ্ভাবিত জাতে নিম্নরূপ ৩-৪টি সেচ দেওয়া যায়।</p>

                <p><b>প্রথম সেচ     :</b> বীজ বপনের ১৫-২০ দিনের মধ্যে (৪-৬ পাতা পর্যায়)</p>
                <p><b>দ্বিতীয় সেচ    :</b> বীজ বপনের ৩০-৩৫ দিনের মধ্যে (৮-১২ পাতা পর্যায়)</p>
                <p><b>তৃতীয় সেচ    :</b> বীজ বপনের ৬০-৭০ দিনের মধ্যে (মোচা বের হওয়া পর্যায়)</p>
                <p><b>চতুর্থ সেচ      :</b> বীজ বপনের ৮৫-৯৫ দিনের মধ্যে (দানা বাঁধার পূর্ব পর্যায়)</p>

                <p>ভুট্টার ফুল ফোটা ও দানা বাঁধার সময় কোন ক্রমেই জমিতে যাতে জলবদ্ধতা সৃষ্টি না হয় সেদিকে খেয়াল রাখতে হবে। জমিতে আগাছা দেখা দিলে নিড়ানী দিয়ে দমন করতে হবে।</p>

                <p className="card-text fw-bold">পোকা মাকড় ব্যবস্থাপনাঃ </p>
                <p className="card-text">ভুট্টার চারা অবস্থায় কাটুই পোকার আক্রমণ হলে হাত দিয়ে তা মেরে ফেলতে হবে।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনাঃ </p>
                <p className="card-text"><b>ভুট্টার বীজ পচা এবং চারা গাছের রোগ দমনঃ </b>বীজ পচা এবং চারা নষ্ট হওয়ার কারণে সাধারণত ক্ষেতে ভুট্টা গাছের সংখ্যা কমে যায়। নানা প্রকার বীজ ও মাটি বাহিত ছত্রাক যেমন পিথিয়াম, রাইজোকটনিয়া, ফিউজেরিয়াম, পেনিসিলিয়াম ইত্যাদি বীজ বপন, চারা ঝলসানো, রোগ ও শিকড় পচা রোগ ঘটিয়ে থাকে। জমিতে রসের পরিমান বেশী হলে এবং মাটির তাপমাত্রা কম থাকলে বপনকৃত বীজের চারা বড় হতে অনেক সময় লাগে। ফলে এ সময়ে ছত্রকের আক্রমনের মাত্রা বেড়ে যায়।</p>

                <p className="card-text fw-bold">প্রতিকারঃ</p>
                <p className="card-text">
                    ১.  সুস্থ্য, সবল ও ক্ষতমুক্ত বীজ এবং ভুট্টার বীজ পচা রোগ প্রতিরোধী বর্ণালী ও মোহর জাত ব্যবহার করতে হবে।<br />
                    ২. উত্তমরূপে জমি তৈরী করে পরিমিত রস ও তাপমাত্রায় (১৩সে. এর বেশী) বপন করতে হবে।<br />
                    ৩. থিরাম বা ভিটাভেক্স (০.২৫%) প্রতি কেজি বীজে ২.৫-৩.০ গ্রাম হারে মিশিয়ে বীজ শোধন করলে ভুট্টার বীজ পচা রোগের আক্রমণ অনেক কমে যায়।</p>

                <p className="card-text fw-bold">ভুট্টার পাতা ঝলসানো রোগ দমনঃ </p>
                <p className="card-text">হেলমিনথোসপরিয়াম টারসিকাম ও হেলমিনথোসপরিয়াম মেইডিস নামক ছত্রাকদ্বয় এ রোগ সৃষ্টি করে। প্রথম ছত্রাকটি দ্বারা আমাদের দেশে ভুট্টার পাতা ঝলসানো রোগ বেশী হতে দেখা যায়। হেলমিনথোসপরিয়াম টারসকাম দ্বারা আক্রান্ত গাছের নিচের দিকের পাতায় লম্বাটে ধূসর বর্ণের দাগ দেখা যায়। পরবর্তীতে গাছের উপরের অংশে তা বিস্তার লাভ করে। রোগের প্রকোপ বেশী হলে পাতা আগাম শুকিয়ে যায় এবং গাছ মরে যায়। এ রোগের জীবানু গাছের আক্রান্ত অংশে অনেক দিন বেঁচে থাকে জীবাণুর বীজকণা বা কনিডিয়া বাতাসের সাহায্যে অনেক দূর পর্যন্ত সুস্থ্য গাছে ছড়াতে পারে। বাতাসের আদ্রতা বেশী হলে এবং ১৮-২৭ ডিগ্রী সে. তাপমাত্রায় এ রোগের আক্রমণ বেড়ে যায়।</p>

                <p className="card-text fw-bold">প্রতিকারঃ</p>
                <p className="card-text">
                    ১.  রোগ প্রতিরোধী জাতের (মোহর) চাষ করতে হবে।<br />
                    ২.   আক্রান্ত ফসলে টিল্ট ২৫০ ইসি (০.০৪%) ১৫ দিন পর পর ২-৩ বার স্প্রে করতে হবে।<br />
                    ৩. ভুট্টা উঠানোর পর জমি থেকে আক্রান্ত গাছ সরিয়ে অথবা পুড়িয়ে ফেলতে হবে।</p>

                <p className="card-text fw-bold">ভুট্টার মোচা ও দানা পচা রোগ দমনঃ </p>
                <p className="card-text">মোচা ও দানা পচা রোগ ভুট্টার ফলন, বীজের গুনাগুন ও খাদ্যমান কমিয়ে দেয়। বিভিন্ন প্রকার ছত্রাক যথা ডিপ্লোডিয়া মেডিস, ফিউজেরিয়াম মনিলিফরমি প্রভৃতি এ রোগ ঘটায়। আক্রান্ত মোচার খোসা ও দানা বিবর্ণ হয়ে যায়। দানা পুষ্ট হয় না, কুঁচকে অথবা ফেটে যায়। অনেক সময় মোচাতে বিভিন্ন দানার মাঝে বা উপরে ছত্রাকের উপস্থিতি খালি চোখেই দেখা যায়। ভুট্টা গাছে মোচা আসা থেকে পাকা পর্যন্ত বৃষ্টিপাত বেশী থাকলে এ রোগের আক্রমণ বাড়ে। পোকা বা পাখির আক্রমনে বা কান্ড পচা রোগে গাছ মাটিতে পড়ে গেলে এ রোগ ব্যাপকতা লাভ করে। এ রোগের জীবাণু বীজ অথবা আক্রান্ত গাছের পরিত্যক্ত অংশে বেঁচে থাকে। একই জমিতে বার বার ভুট্টার চাষ করলে এ রোগ দ্রুত বিস্তার লাভ করে।</p>

                <p className="card-text fw-bold">প্রতিকারঃ</p>
                <p className="card-text">
                    ১.  এ রোগের প্রাদুর্ভাব এড়াতে একই জমিতে বার বার ভুট্টা চাষ করা ঠিক নয়।<br />
                    ২.  জমিতে পোকা ও পাখির আক্রমন রোধ করতে হবে।<br />
                    ৩.  ভুট্টা পেকে গেলে তাড়াতাড়ি কেটে ফেলতে হবে।<br />
                    ৪.  কাটার পর ভুট্টার পরিত্যক্ত অংশ পুড়িয়ে ফেলতে হবে।</p>

                <p className="card-text fw-bold">ভুট্টার কান্ড পচা রোগ দমনঃ </p>
                <p className="card-text">বিভিন্ন প্রজাতির ছত্রাক যথা ডিপ্লোডিয়া মেডিস, ফিউজেরিয়াম মনিলিফরমি-এর কারণে এ রোগ ঘটে থাকে। প্রাথমিক লক্ষণ হিসেবে গাছের কান্ড পচে যায় এবং গাছ মাটিতে ভেঙ্গে পড়ে। আমাদের দেশে খরিফ মৌসুমে এ রোগ বেশী হয়ে থাকে। জমিতে নাইট্রোজেনের পরিমাণ বেশী এবং পটাশের পরিমাণ কম হলে ছত্রাক জনিত কান্ড পচা রোগ বেশী হয়।</p>

                <p className="card-text fw-bold">প্রতিকারঃ</p>
                <p className="card-text">
                    ১.  ছত্রাকনাশক ভিটাভেক্স-২০০ দিয়ে বীজ শোধন করে লাগাতে হবে।<br />
                    ২.  সুষম হারে সার ব্যবহার করতে হবে, বিশেষ করে নাইট্রোজেন ও পটাশ পরিমিত মাত্রায় প্রয়োগ করতে হবে।<br />
                    ৩.  ভুট্টা কাটার পর পরিত্যক্ত অংশ পুড়িয়ে ফেলতে হবে।<br />
                    ৪.  শিকড় ও কান্ড আক্রমকারী পোকা-মাকড় দমন করতে হবে।<br />
                    ৫.  আক্রান্ত জমিতে অনুমোদিত ছত্রাকনাশক ২-৩ বার স্প্রে করতে হবে।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহঃ </p>
                <p className="card-text">দানার জন্য ভুট্টা সংগ্রহের ক্ষেত্রে মোচা চক্‌চক্‌ খড়ের রং ধারণ করলে এবং পাতা কিছুটা হলদে হলে সংগ্রহের উপযুক্ত হয়। এ অবস্থায় মোচা থেকে ছড়ানো বীজের গোড়ায় কালো দাগ দেখা যাবে। ভুট্টা গাছের মোচা ৭৫-৮০% পরিপক্ক হলে ভুট্টা সংগ্রহ করা যাবে। বীজ হিসেবে মোচার মাঝামাঝি অংশ থেকে বড় ও পুষ্ট দানা সংগ্রহ করতে হবে।</p>

            </div>







        </div >
    );
};

export default VuttaCrops;