import React from 'react';
import { Divider, Typography } from '@mui/material';
import mula from '../../../../../images/Agri-info/crops/mula_মুলা.jpg'
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const MulaInfo = () => {

    // dynamic title
    useDocumentTitle("মূলা");

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
                মূলা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={mula} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>মূলা একটি পুষ্টিকর সবজি হলেও অনেকেই মূলা খতে পছন্দ করেন না। মূলাতে প্রচুর পরিমাণে ক্যারোটিন তথা ভিটামিন এ, ক্যালসিয়াম ও লৌহ রয়েছে। এ দেশে মূলার আবাদ দিন দিন বাড়ছে। বিশেষ করে অমৌসুমে মূলা আবাদের দিকে চাষিরা ঝুঁকে পড়েছেন।</p>

                            <p className="card-text fw-bold">জমি ও মাটি</p>
                            <p className="card-text">উঁচু, মাঝারি উঁচু ও মাঝারি নিচু জমিতে মূলা চাষ করা যায়। সুনিষ্কাশিত বেলে দোয়াশ মাটি মূলা চাষের জন্য ভাল। এটেল মাটিতে মূলার বাড় বাড়তি কম হয়। মূলা চাষের জন্য জমি গভীরভাবে ধুলো ধুলো করে চাষ করতে হয়। ছাই ও জৈব সার বেশী ব্যবহারে মূলার বাড় বাড়তি ভাল হয়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">জাত</p>
                <p className="card-text">একসময় জাপানের বিখ্যাত তাসাকি সান জাতের মূলার মাধ্যমে এ দেশে উচ্চফলনশীল মূলার আবাদ শুরু হলেও এখন মূলার প্রায় ২৫টি জাত চাষ হচ্ছে। আসছে নিত্য নতুন স্বল্প জীবনকালের অধিক ফলনশীল হাইব্রিড জাত। উল্লেখযোগ্য জাত সমূহ হল বারি মূলা ১, বারি মূলা ২, বারি মূলা ৩, এভারেষ্ট, হোয়াইট প্রিন্স, বিপ্লব ৯৪, হিমালয় এফ১, সুপার ৪০, মুক্তি এফ১, তাসাকী, কুইক ৪০, রকি ৪৫, হোয়াইট রকেট, হোয়াইট ৪০, জি চেটকি, সুফলা ৪০, বিএসবিডি ২১০১ এফ১, আনারকলি, দুর্বার, রকেট এফ১, সামার বেষ্ট এফ১, হ্যাভেন এফ১, মিনো আর্লি লং হোয়াই, বরকতি ৪০ এফ১, পাইলট এফ১, সিগমা ৪০ ইত্যাদি। নিচে মূলার বিভিন্ন জাতের সংক্ষিপ্ত পরিচিতি দেয়া হল-</p>
                <p className="card-text"><b>বারিমূলা ১ (তাসাকিসান)- </b>ভাদ্র থেকে কার্তিক মাসে বীজ বুনতে হয়। বীজ বোনার ৪০-৪৫ দিন পর থেকেই মূলা তোলা যায়। মূলার রঙ ধবধবে সাদা, বেলুনাকৃতি, লম্বা ও বড়, দৈর্ঘ্যে প্রায় ৩৫ সেন্টিমিটার, প্রতিটি মূলার গড় ওজন ১ কেজি। দেশী মূলার মত অত ঝাঁঝ নেই। প্রতি হেক্টরে ফলন ৬৫-৭০ টন।</p>
                <p className="card-text"><b>বারিমূলা ২ (পিংকী)- </b>ভাদ্র থেকে কার্তিক মাসে বীজ বুনতে হয়। বীজ বোনার ৪০-৪৫ দিন পর থেকেই মূলা তোলা যায়। মূলার রঙ লালচে, নলাকৃতি, দৈর্ঘ্যে প্রায় ২৫-৩০ সেন্টিমিটার, মধ্যমাকার, প্রতিটি মূলার গড় ওজন ৯০০ গ্রাম। শাক খাওয়ার উপযুক্ত। প্রতি হেক্টরে ফলন ৬৫-৭০ টন। </p>
                <p className="card-text"><b>বারিমূলা ৩ (দ্রুতি)- </b>ভাদ্র থেকে কার্তিক মাসে বীজ বুনতে হয়। বীজ বোনার ৪০-৪৫ দিন পর থেকেই মূলা তোলা যায়। মূলার রঙ সাদা, নলাকৃতি। পাতার কিনারা ঢেউ খেলানো। মূলার অর্ধেক অংশ মাটির উপরে থাকে। প্রতিটি মূলার গড় ওজন ৪০০-৬০০ গ্রাম। প্রতি হেক্টরে ফলন ৪০-৪৫ টন। জীবনকাল ৪০-৪৫ দিন। রোগ পোকার আক্রমণ প্রতিরোধী। এ দেশের আবহাওয়ায় ভাল বীজ উৎপাদন করা যায়। প্রতি হেক্টরে প্রায় ১.২-১.৩ টন বীজ পাওয়া যায়।</p>
                <p className="card-text"><b>এভারেষ্ট এফ১- </b>সারা বছর চাষ করা যায়। একই জমিতে একই মৌসুমে ৩ বার চাষ করা যায়। সহজে ফুল আসেনা। বীজ বোনার ৪০-৪৫ দিন পর থেকেই মূলা তোলা যায়। মূলার রঙ সাদা, নলাকৃতি, ছোট আকারের, প্রতিটি মূলার গড় ওজন ৪০০-৫০০ গ্রাম। শাক খাওয়ার উপযুক্ত। প্রতি হেক্টরে ফলন ৫০-৬০ টন।</p>
                <p className="card-text"><b>হোয়াইট প্রিন্স এফ১- </b>মধ্য শ্রাবণ থেকে ভাদ্র মাসে বীজ বুনতে হয়। বীজ বোনার ৪০-৪৫ দিন পর থেকেই মূলা তোলা যায়।আগাম, দ্রুত বর্ধনশীল, ঝাঁঝহীন ও সুস্বাদু, প্রতিটি মূলার গড় ওজন ৩০০-৪০০ গ্রাম। শাক খাওয়ার উপযুক্ত। প্রতি হেক্টরে ফলন ৫০-৬০ টন।</p>
                <p className="card-text"><b>মিনো আর্লি লং হোয়াইট- </b>আশ্বিন থেকে অগ্রহায়ণ মাসে বীজ বুনতে হয় ও পৌষ ফাল্গুনে মূলা ওঠে। বীজ বোনার ৪০-৪৫ দিন পর থেকেই মূলা তোলা যায়। মূলা লম্বা, সাদা, গ্রীস্মকালে ভাল হয়। প্রতিটি মূলার গড় ওজন ২৫০-৪০০ গ্রাম। প্রতি হেক্টরে ফলন ৪০-৫০ টন।</p>

                <p className="card-text fw-bold">বীজ হার ও বপন</p>
                <p className="card-text">আশ্বিন থেকে কার্তিক মাসের মধ্যেই অধিকাংশ মূলার বীজ বপন করা হয়। প্রতি হেক্টরে বপনের জন্য ২.৫-৩.০ কেজি বীজের প্রয়োজন হয়। সাধারণতঃ ছিটিয়ে বীজ বপন করা হয়। তবে সারিতে বপন করলে পরিচর্যার সুবিধে হয়। সারিতে বুনতে হলে এক সারি থেকে আর এক সারির দূরত্ব দিতে হবে ২৫-৩০ সেমি.।</p>

                <p className="card-text fw-bold">সারের মাত্রা</p>
                <p className="card-text fw-bold">সারের নাম &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; সারের পরিমাণ </p>
                <p className="card-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;প্রতি শতকে     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     প্রতি হেক্টরে         </p>
                <p className="card-text">ইউরিয়া     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ১.২-১.৪ কেজি   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ৩০০-৩৫০ কেজি   </p>
                <p className="card-text">টি এস পি   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   ১.০- ১.২ কেজি   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ২৫০-৩০০ কেজি   </p>
                <p className="card-text">এমওপি    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ০.৮৫-১.৪ কেজি  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  ২১৫-৩০০ কেজি   </p>
                <p className="card-text">গোবর      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ৩২-৪০ কেজি   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ৮-১০ টন</p>

                <p className="card-text fw-bold">সার প্রয়োগ পদ্ধতি</p>
                <p className="card-text">জমি তৈরির সময় সবটুকু জৈব সার, টিএসপি ও অর্ধেক এমওপি সার মাটির সাথে মিশিয়ে দিতে হবে। ইউরিয়া ও বাকি অর্ধেক এমওপি সার সমান ২ কিস্তিতে ভাগে ভাগ করে বীজ বপনের পর তৃতীয় ও পঞ্চম সপ্তাহে ছিটিয়ে সেচ দিতে হবে। মূলার বীজ উৎপাদন করতে হলে জমিতে অবশ্যই বোরন সার হিসেবে বোরিক পাউডার/বোরক্স ব্যবহার করতে হবে। প্রতি হেক্টরে ১০-১৫ কেজি বোরিক এসিড/বোরাক্স দিলেই চলে।</p>

                <p className="card-text fw-bold">পরিচর্যা</p>
                <p className="card-text">বীজ বপনের ৭-১০ দিন পর অতিরিক্ত চারা তুলে পাতলা করে দিতে হবে। ৩০ সেমি. দূরত্বে একটি করে চারা রাখা ভাল। মাটিতে রস কম থাকলে সেচ দিতে হবে। প্রতি কিসি-র সার উপরি প্রয়োগের পর পরই সেচ দিতে হবে। আগাছা পরিষ্কার করে দিতে হবে। মাটি শক্ত হয়ে গেলে নিড়ানী দিয়ে মাটির উপরের চটা ভেঙ্গে দিতে হবে।</p>

                <p className="card-text fw-bold">পোকামাকড় ব্যবস্থাপনা</p>
                <p className="card-text">অনেক সময় মূলা পাতার বিট্‌ল বা ফ্লি বিট্‌ল পাতা ছোট ছোট ছিদ্র করে খেয়ে ক্ষতি করে। এ ছাড়া করাত মাছি বা মাস্টার্ড স’ ফ্লাই, বিছা পোকা ও ঘোড়া পোকা পাতা খায়। বীজ উৎপাদনের সময় ক্ষতি করে জাব পোকা।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনা</p>
                <p className="card-text">মূলা পাতায় অল্টারনারিয়া পাতায় দাগ একটি সাধারণ সমস্যা। এছাড়া হোয়াইট স্পট বা সাদা দাগ রোগও দেখা যায়।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহ ও ফলন</p>
                <p className="card-text">মূলা শক্ত হয়ে আঁশ হওয়ার আগেই তুলতে হবে। অবশ্য এখন হাইব্রিড জাতসমূহ আসাতে এ সম্ভাবনা অনেক কমে গেছে। তবুও কচি থাকতেই মূলা তুলে ফেলতে হবে। এতে বাজার দাম ভাল পাওয়া যায় এবং স্বাদও ভাল থাকে। জাতভেদে হেক্টও প্রতি ফলন হয় ৪০-৬০ টন।</p>




            </div>






        </div >

    );
};

export default MulaInfo;