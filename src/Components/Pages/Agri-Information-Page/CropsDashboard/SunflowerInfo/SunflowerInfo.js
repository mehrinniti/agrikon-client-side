import React from 'react';
import { Divider, Typography } from '@mui/material';
import sunflower from '../../../../../images/Agri-info/crops/sunflower_সুর্যমুখী.png';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const SunflowerInfo = () => {

    // dynamic title
    useDocumentTitle("সুর্যমুখী");

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
                সুর্যমুখী
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={sunflower} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">ফসলের নাম :সূর্যমুখী(Sunflower)<br />উদ্ভিদতাত্ত্বিক নাম : Hellianthus annus.</p>

                            <p className="card-text fw-bold">পুষ্টিমূল্য/উপাদান : </p>
                            <p className="card-text">বীজে লিনোলিক এসিড বিদ্যমান। উন্নতমানের তৈল থাকে।</p>

                            <p className="card-text fw-bold">ভেষজগুণ : </p>
                            <p className="card-text">হৃদরোগীদের জন্য সূর্যমুখীর তেল খুবই উপকারী।</p>

                            <p className="card-text fw-bold">ব্যবহার :</p>
                            <p className="card-text">সূর্যমুখীর খৈল গরু ও মহিষের উৎকৃষ্টমানের খাদ্য হিসেবে ব্যবহৃত হয়। এর বীজ ছাড়ানোর পর মাথাগুলো গরুর খাদ্য হিসেবে ব্যবহার করা যায়। গাছ ও পুষ্পস্তবক জ্বালানী হিসেবে ব্যবহৃত হয়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">উপযুক্ত জমি ও মাটি : </p>
                <p className="card-text">সূর্যমুখী সাধারণত সব মাটিতেই জন্মে। তবে দো-আঁশ মাটি সবচেয়ে বেশী উপযোগী।</p>

                <p className="card-text fw-bold">জাত পরিচিতি : </p>
                <p className="card-text">এ পর্যন্ত বারি কর্তৃক ২টি জাত উদ্ভাবন করা হয়েছে। যথা (১) কিরণী (ডিএস-১) এবং বারি সুর্যমুখী-২। কিরণী:১৯৯২ সালে জাতটির অনুমোদন দেয়া হয়। বাছাই প্রক্রিয়ার মাধ্যমে জাতটি উদ্ভাবন করা হয়। জাতটির কান্ডের ব্যাস ১.৫-২.০ সে.মি.। পরিপক্ক পুষ্পমঞ্জুরী বা শাখার ব্যাস ১২-১৫ সে.মি.। প্রতি  মাথায় বীজের সংখ্যা ৪০০-৬০০। বীজের রং কালো। ১০০০ বীজের ওজন ৬৮-৭২ গ্রাম। বীজে তেলের পরিমাণ শতকরা ৪২-৪৪ ভাগ। জাতটি মোটামুটি অলটারনারিয়া বৱাইট রোগ সহনশীল। জীবনকাল ৯০-১১০ দিন। হেক্টর প্রতি ফলন ১.৬ হতে ১.৮ টন।</p>

                <p className="card-text fw-bold">বারি সূর্যমুখী-২ : </p>
                <p className="card-text">গাছের কান্ডের ব্যাস ২.০-২.৪ সে.মি.। পরিপক্ক পুষ্পমঞ্জুরী বা শাখার ব্যাস ১৫-১৮ সে.মি.। বীজের রং কালো। ১০০০ বীজের ওজন ৬৫-৭০ গ্রাম। প্রতি মাথায় বীজের সংখ্যা ৪৫০-৬৫০। তেলের পরিমাণ শতকরা ৪২-৪৪ ভাগ। জীবনকাল রবি মৌসুমে ৯৫-১০০ দিন এবং খরিফ মৌসুমে ৯০-৯৫ দিন।  হেক্টর প্রতি ফলন রবি মৌসুমে ২.০ হতে ২.৩ টন এবং খরিপ মৌসুমে ১.৫ হতে ১.৮ টন।</p>

                <p className="card-text fw-bold">বীজের হার : </p>
                <p className="card-text">৮-১০ কেজি/হেক্টর।</p>

                <p className="card-text fw-bold">বপন সময় ও বপন পদ্ধতি : </p>
                <p className="card-text">সূর্যমুখী সারা বছর চাষ করা যায়। তবে অগ্রহায়ন মাসে (মধ্য  থেকে চাষ করলে এর ভালো ফলন পাওয়া যায়। খরিপ-১ মৌসুমে অর্থাৎ জ্যৈষ্ঠে (মধ্য এপ্রিল থেকে মধ্য মে) মাসেও এর চাষ করা যায়। সূর্যমুখী বীজ সারিতে বুনতে হয়। সারি থেকে সারির দূরত্ব ৫০ সে.মি. এবং গাছ থেকে গাছের  দূরত্ব ২৫ সে.মি.।</p>

                <p className="card-text fw-bold">সার প্রয়োগ পদ্ধতি :</p>
                <p className="card-text">অর্ধেক ইউরিয়া এবং বাকি সব সার শেষ চাষের সময় জমিতে ছিটিয়ে মাটির সাথে মিশিয়ে দিতে হবে। বাকি অর্ধেক ইউরিয়া ২ ভাগ করে প্রথম ভাগ চারা গজানোর ২০-২৫ দিন এবং দ্বিতীয় ভাগ ৪০-৪৫ দিন পর (ফুল ফোটার পূর্বে) প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">সেচ ও আগাছা ব্যবস্থাপনা :</p>
                <p className="card-text">সূর্যমুখী ফসলের ফলন বেশী পেতে হলে কয়েকবার সেচ দেয়া প্রয়োজন। প্রথম সেচ বীজ বপনের ৩০ দিন পর (গাছে ফুল আসার আগে), দ্বিতীয় সেচ বীজ বপনের ৫০ দিন পর (পুষ্পস্তবক তৈরির সময়) এবং তৃতীয় সেচ বীজ বপনের ৭০ দিন পর (বীজ পুষ্ট হবার আগে) সেচ দেয়া দরকার।সূর্যমুখীর জমি সর্বদা আগাছামুক্ত রাখতে হবে। জমিতে আগাছা দেখা দিলে উহা তুলে ফেলতে হবে।</p>

                <p className="card-text fw-bold">পোকামাকড় ব্যবস্থাপনা :</p>
                <p className="card-text fw-bold">পোকার নাম : বিছা পোকা</p>
                <p className="card-text"><b>ভূমিকা :</b> ছোট অবস্থায় এরা দলবদ্ধভাবে থাকে।</p>

                <p className="card-text fw-bold">পোকা চেনার উপায় : </p>
                <p className="card-text">কীড়া বা বিছা হলুদ রংয়ের এবং গায়ে কাঁটা থাকে।</p>

                <p className="card-text fw-bold">ক্ষতির নমুনা : </p>
                <p className="card-text">এরা সাধারণত গাছের পাতায় আক্রমণ করে। এ পোকার কীড়া দলবদ্ধভাবে থেকে পাতার সবুজ অংশ খেয়ে পাতাকে পাতলা সাদা পর্দার মতো করে ফেলে।</p>
                <p className="card-text"><b>অনুকূল পরিবেশ : </b>উষ্ণ আবহাওয়া।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">mn পোকা দেখার সংগে সংগে গাছ থেকে পোকাসহ পাতা সংগ্রহ করে পোকা মেরে ফেলতে হবে। সেচ নালায় কেরোসিন মিশ্রিত পানি থাকলে কীড়া পানিতে পড়ে মারা যায়।<br />প্রতি লিটার পানিতে ডায়াজিনন-৬০ ইসি ২ মিলি হারে মিশিয়ে বিকালে জমিতে স্প্রে করতে হবে।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনা :</p>
                <p className="card-text fw-bold">রোগের নাম :পাতা ঝলসানো রোগ</p>
                <p className="card-text fw-bold">ক্ষতির নমুনা :</p>
                <p className="card-text">অলটারনেরিয়াহেলিয়ানথী নামক ছত্রাকের সাহায্যে এ রোগ ছড়ায়। আক্রমণের শুরুতে পাতায় ধুসর বা গাঢ় বাদামী বর্ণের অসম আকৃতির দাগ পড়ে। এ দাগগুলো একত্রে মিলিত হয়ে বড় দাগের সৃষ্টি করে এবং অবশেষে পুরো পাতা ঝলসে যায়।</p>

                <p className="card-text fw-bold">বিস্তার : </p>
                <p className="card-text">বীজ এবং বায়ুর সাহায্যে বিস্তার লাভ করে।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা : </p>
                <p className="card-text">কিরণী জাতের চাষ করা</p>

                <p>প্রতি লিটার পানির সাথে ২ গ্রাম রোভরাল-৫০ ডব্লিউ পি মিশিয়ে ১০ দিন পর পর ৩ বার সেপ্র করা বা ফসল কাটার পর পরিত্যক্ত কান্ড, মূল ও পাতা পুড়িয়ে ফেলা।</p>

                <p className="card-text fw-bold">ফসল তোলা : </p>
                <p className="card-text">৯০-১১০ দিনের মধ্যে ফসল তোলা যায়।</p>

            </div>
        </div >


    );
};

export default SunflowerInfo;