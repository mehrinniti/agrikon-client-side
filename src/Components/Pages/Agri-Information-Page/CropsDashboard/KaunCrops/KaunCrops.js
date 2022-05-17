import { Divider, Typography } from '@mui/material';
import React from 'react';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';
import kaun from '../../../../../images/Agri-info/crops/Grain_কাউন.jpg'

const KaunCrops = () => {

    // dynamic title
    useDocumentTitle("কাউন");

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
                কাউন
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={kaun} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">ভেজজগুনঃ</p>
                            <p className="card-text">ব্যবহারঃ ছোট দানা বিশিষ্ট শস্যটি এ দেশে গরীবদের খাদ্য হিসেবে বিবেচিত হয়।</p>

                            <p className="card-text fw-bold">উপযুক্ত জমি ও মাটিঃ</p>
                            <p className="card-text">প্রায় সব ধরনের মাটিতে কাউনের চাষ করা যায়। তবে পানি দাঁড়ায় না এমন বেলে দোঁআশ মাটিতে এর ফলন ভাল হয়।</p>

                        </div>
                    </div>
                </div>
            </div>


            <div className='text-start pb-5'>

                <p className="card-text fw-bold">জাত পরিচিতিঃ</p>
                <p className="card-text">কাউনের স্থানীয় জাত ছাড়া বাংলাদেশ কৃষি গবেষণা কর্তৃক উদ্ভাবিত ‘তিতাস’ নামের একটি জাত আছে। কাউনের এ জাতটি শিবনগর নামে ১৯৮০ সালে কুমিল্লা জেলা থেকে সংগ্রহ করা হয় এবং দেশী বিদেশী জাতের সাথে তুলনামূলক মূল্যায়ণের পর ১৯৮৯ সালে তিতাস নামে অনুমোদন করা হয়। তিতাস জাত উচ্চ ফলনশীল, আগাম রোগ ও পোকা প্রতিরোধ ক্ষমতা সম্পন্ন। তিতাস জাতের গাছ মাঝারি লম্বা, পাতা সবুজ , কান্ড শক্ত । গাছ সহজে নুয়ে পড়ে না । শীষ বেশ লম্বা, মোটা এবং রেশমী। বীজ মাঝারি আকারের এবং ঘিয়ে রংয়ের । হাজার বীজের ওজন ২.৩-২.৫ গ্রাম । স্তানীয় জাতের চেয়ে ফলন প্রায় ৩০-৩৫% বেশী । জাতটি রবি মৌসুমে ১০৫-১১৫ দিনে এবং খরিফ মৌসুমে ৮৫-৯৫ দিনে পাকে । তিতাস জাতটি গোড়া পচা রোগ প্রতিরোধ ক্ষমতা সম্পন্ন । রবি মৌসুমে তিতাসের ফলন হেক্টর প্রতি ২.০-২.৫ টন। খরিফ মৌসুমে এর ফলন একটু কম হয়।</p>

                <p className="card-text fw-bold">বপনের সময়ঃ </p>
                <p className="card-text">দেশের উত্তরাঞ্চলে অগ্রহায়ণ থেকে মাঘ মাস (মধ্য নভেম্বর থেকে মধ্য ফেব্রুয়ারী) পর্যন্ত বীজ বোনা যায়।  দেশের দক্ষিণাঞ্চলে সাধারণত অগ্রহায়ণ মাসে বীজ বোনা হয়।</p>

                <p className="card-text fw-bold">বীজের হারঃ </p>
                <p className="card-text">কাউনের বীজ ছিটিয়ে ও সারিতে বোনা যায়। ছিটিয়ে বুনলে হেক্টর প্রতি ১০ কেজি এবং সারিতে বুনলে ৮ কেজি বীজের প্রয়োজন হয়।  বীজ সারিতে বুনলে সারি থেকে সারির দূরত্ব ২৫-৩০ সেমি  রাখতে হবে। চারা গজানোর পর ২-৩ সপ্তাহের মধ্যে সারিতে চারার দূরত্ব ৬-৮ সেমি রেখে বাকি চারা তুলে ফেলতে হবে। </p>

                <p className="card-text fw-bold">সার ব্যবস্থাপনাঃ </p>
                <p className="card-text">কাউন চাষে সচরাচর রাসায়নিক সার প্রয়োগ করা হয় না । তবে অনুর্বর জমিতে হেক্টর প্রতি নিম্নরূপ সার প্রয়োগ করলে ফলন বেশী হয়। </p>

                <p className="card-text">সারের নাম   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  সারের পরিমান/শতকে   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   সারের পরিমান / হেক্টর  </p>
                <p className="card-text">ইউরিয়া     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ৩৮৫-৪২৫ গ্রাম  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          ৯৫-১০৫ কেজি     </p>
                <p className="card-text">টি এসপি    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ২৮৩-৩০৪ গ্রাম  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          ৭০-৭৫   কেজি     </p>
                <p className="card-text">এমওপি     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ১২১-১৬২ গ্রাম  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            ৩০-৪০   কেজি   </p>

                <p className="card-text fw-bold">সার প্রয়োগ পদ্ধতিঃ</p>
                <p className="card-text">সেচ বিহীন চাষে সবটুকু সার শেষ চাষের সময় প্রয়োগ করতে হবে। সেচের ব্যবস্থা থাকলে শেষ চাষের সময় অর্ধেক ইউরিয়া এবং সবটুকু টিএসপি ও এমওপি সার প্রয়োগ করতে হবে। বাকি অর্ধেক ইউরিয়া  বীজ বপনের ৩৫-৪০ দিন পর উপরি প্রয়োগ করতে হবে। </p>

                <p className="card-text fw-bold">সেচ ও আগাছা ব্যবস্থাপনাঃ</p>
                <p className="card-text">কাউন একটি খরা সহিষ্ণু ফসল । তবে রবি মৌসুমে খরা দেখা দিলে ১-২ টি হালকা সেচের ব্যবস্থা করলে ফলন বেশী হয়। জমিতে আগাছা দেখা দিলে নিড়ানী দিয়ে দমন করতে হবে।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহঃ</p>
                <p className="card-text">কাউনের শীষ খড়ের রং ধারন করলে এবং বীজ দাঁতে কাটার পর কট্‌ করে শব্দ হলে বুঝতে হবে  কাটার উপযুক্ত সময় হয়েছে।</p>


            </div>







        </div >
    );
};

export default KaunCrops;