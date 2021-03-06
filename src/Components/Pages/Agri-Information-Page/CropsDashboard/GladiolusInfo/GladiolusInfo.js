import React from 'react';
import { Divider, Typography } from '@mui/material';
import gladiolus from '../../../../../images/Agri-info/crops/Gladiolus_গ্লাডিওলাস.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const GladiolusInfo = () => {

    // dynamic title
    useDocumentTitle("গ্লাডিওলাস");

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
                variant="h4"
                noWrap
                component="div"
            >
                গ্লাডিওলাস
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={gladiolus} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>মাটি ও জলবায়ুঃ</b><br />যে কোন ধরনের উর্বর মাটিতেই গ্লাডিওলাস চাষ করা যায় তবে সুনিষ্কাশিত দো-আঁশ ও বেঁলে দো-আঁশ মাটি চাষের জন্য উত্তম। মাটির পি এইচ মান ৬-৭ এর মধ্যে থাকা উচিত। মাটির ঠান্ডা আবহাওয়ায় এ ফুল ভাল জন্মে। সাধাণত ১৫-২০ ডিগ্রী সে. তাপমাত্রা এ বৃদ্ধি ও ফুল উৎপাদনের জন্য উপযোগী। গ্লাডিওলাস প্রতিদিন ৮-১০ ঘন্টা আলো পছন্দ করে। তাই রৌদ্রজ্জ্বল জায়গা এবং ঝড়ো বাতাস প্রতিরোধের ব্যবস্থা আছে এমন জায়গা এই ফুল চাষের জন্য নির্বাচন করা উচিত।</p>
                            <p className="card-text"><b>জাতঃ</b><br />বাংলাদেশ কৃষি গবেষণা ইনস্টিটিউট গ্লাডিওলাস ফুলের বারি গ্লাডিওলাস-১, বারি গ্লাডিওলাস-২ ও বারি গ্লাডিওলাস-৩ জাতগুলো উদ্ভাবন করেছে। এই জাতগুলো আমাদের দেশের সব জায়গায় চাষাবাদ উপযোগী।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>বংশ বিস্তারঃ</b><br />বীজ, করম ও করমেলের মাধ্যমে গ্লাডিওলাসের বংশ বিস্তার করা যায়। সাধারণভাবে চাষের জন্য করম রোপণ করা হয়। ৪-৫ সেমি ব্যাসের করম ব্যবহার করা ভাল।</p>
                <p className="card-text"><b>জমি তৈরি ও সার প্রয়োগঃ</b><br />গ্লাডিওলাস চাষে উপযুক্ত সময় অক্টোবর-নভেম্বর। এসময় ভালভাবে চাষ ও মই দিয়ে মাটি ঝুরঝুরে করে জমি তৈরি করতে হয়। সাধারনত গ্লাডিওলাস চাষে প্রতি বর্গমিটারে ৫-৬ কেজি পচা গোবর বা জৈব সার, ১০ গ্রাম ইউরিয়া, ৩০ গ্রাম টিএসপি এবং ৩০ গ্রাম এমওপি সার প্রয়োজন। শেষ চাষের সময় টিএসপি, এমওপি ও গোবর সার মাটিতে মিশিয়ে দিতে হবে।  ইউরিয়া সারের অর্ধেক রোপনের ২০-২৫ দিন পর এবং বাকি অর্ধেক পুষ্পদন্ড বের হওয়ার পর উপরিপ্রয়োগ করতে হবে।</p>
                <p className="card-text"><b>করম রোপনঃ </b><br />রোপনের আগে বীজ ১২ ঘন্টা ভিজিয়ে নিলে অঙ্কুরোদগম তরান্বিত হয়। বীজকে রোগ মুক্ত করতে ডাইথেন-এম ৪৫এর মধ্যে ভিজিয়ে (১০ লি. পানিতে ৩০-৩৫ গ্রাম হারে মিশিয়ে) ছায়ায় শুকিয়ে নিতে হবে। সারি থেকে সারি ২০ সেমি এবং গাছ থেকে গাছ ১৫ সেমি দূরত্ব রেখে মাটির ৫-৬ সেমি গভীরে রোপন করতে হবে।</p>
                <p className="card-text"><b>অন্তর্বর্তীকালীন পরিচর্যাঃ</b><br />জমি আগাছামুক্ত রাখতে হবে। শুষ্ক মৌসুমে প্রয়োজন মত সেচ দিতে হবে। প্রতি সেচের পর জমিতে জো আসলে নিড়ানি দিয়ে জমি আলগা করে দিতে হবে। ইউরিয়া সারের প্রথম উপি প্রয়োগের পর সেচ দিতে হবে এবং জমিতে জো আসলে মাটি ঝুরঝুরে করে দুই সারির মাঝখানের মাটি গাছের গোড়ায় তুলে দিতে হবে।  বাতাসে গাছ হেলে পড়ার হাত থেকে রক্ষার জন্য ছোট ছোট খুটি বা প্লাস্টিকের রশি টেনে দেওয়া প্রয়োজন। গ্লাডিওলাসে সীট ব্লাইট রোগে পাতা ও ফুল আক্রান্ত হয় এবং ফিজিরিয়াম রট জীবানুর আক্রমণে কান্ড ও গোড়া পচে যায়। উভয় রোগের জন্য ১৫ দিন অন্তর বেভিস্টিন (.২%) বা ডাইথেন এম ৪৫ রোগ নাশক স্প্রে করতে হবে। পোকার জন্য রাইসন বা পারহেকথিয়ন স্প্রে করতে হবে।</p>
                <p className="card-text"><b>ফুল সংগ্রহঃ</b><br />সাধারণত স্পাইকের নিচ থেকে ১-২টি পাপড়ি ফুটলে ফুল সংগ্রহ করতে হয়। ফুল সংগ্রহের পরপরই বালতি ভর্তি পানিতে সোজা করে ডুবিয়ে রেখে পরে নিম্ন তাপমাত্রায় (৬-৭ডিগ্রী) সংরক্ষণ করা উত্তম।  স্পাইক কাটার সময় গাছের গোড়ায় ৪-৫টি পাতা রাখতে হবে তাহলে করম পুষ্ট হবে।</p>
                <p className="card-text"><b>করম তোলা ও সংরক্ষণঃ</b><br />সাধারণত মার্চ-এপ্রিল মাসে করম তোলা হয়। ফুল ফোঁটা শেষ হলে পাতা হলুদ হয় ওে গাছ মারা যায়। এসময় গাছের গোড়া খুঁড়ে সাবধানে করমগুলি সংগ্রহ করা হয়। খেয়াল রাখতে হবে যেন করম কেটে বা আঘাতপ্রাপ্ত না হয়। করম সংগ্রহের পর বড় ও ছোট করম বাছাই করে ছায়ায় শুকাতে হবে। সংরক্ষণের আগে করমগুলোকে ০.১% বেনলেট বা ০.২% ক্যাপটান দ্রবণে ৩০ মিনিট শোধন করে শুকিয়ে নিতে হবে। এরপর করমগুলো ছিদ্রযুক্ত পলিথিন ব্যাগে ভরে ঘরের শকনো ও ঠান্ডা জায়গায় সংরক্ষণ করতে হবে।</p>

            </div>
        </div >

    );
};

export default GladiolusInfo;