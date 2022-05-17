import React from 'react';
import { Divider, Typography } from '@mui/material';
import borboti from '../../../../../images/Agri-info/crops/Borboti_বরবটি.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const BorbotiInfo = () => {

    // dynamic title
    useDocumentTitle("বরবটি");

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
                বরবটি
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={borboti} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>বরবটি আমিষ সমৃদ্ধ একটি সবজি। প্রায় সারা বছরই এটি ফলানো যায়। তবে খরিপ তথা গ্রীষ্মকালে ভাল হয়। খুব শীতে ভাল হয় না।</p>

                            <p className="card-text fw-bold">মাটিঃ</p>
                            <p className="card-text">দোআঁশ ও বেলে দোআঁশ মাটি বরবটি চাষের জন্য উপযোগী।</p>

                            <p className="card-text fw-bold">জাতঃ</p>
                            <p className="card-text">কেগরনাটকীই অনেকদিন পর্যন্ত বরবটি একটি উন্নত জাত হিসেবে চাষ হয়ে আসছে। এখন অবশ্য বেশ কয়েকটি জাত চলে এসেছে। লাল বেণী, তকি, ১০৭০, বনলতা, ঘৃতসুন্দরী, গ্রীন লং, গ্রীন ফলস এফ১, সামুরাই এফ১ ইত্যাদি কয়েকটি উল্লেখযোগ্য কয়েকটি  জাত। কেগরনাটকী জাতটি পৌষ-মাঘ মাস ছাড়া সারা বছরই চাষ করা যায়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p> মধ্য মাঘ থেকে মধ্য আশ্বিনে চাষ করা যায় ঘৃতসুন্দরী, গ্রীন লং। মধ্য ফাল্গুন থেকে মধ্য আশ্বিন পর্যন্ত চাষ করা যায় ১০৭০ জাতটি। উল্লেখিত জাতগুলোর রমধ্যে কেগরনাটকী ও লাল বেণী জাতের ফলন সবচেয়ে বেশি। তবে খেতে ভাল ঘৃতসুন্দরী।</p>
                <p className="card-text fw-bold">সময়ঃ</p>
                <p className="card-text">বৈশাখ-জ্যৈষ্ঠ মাসে সাধারণতঃ বীজবপন করা হয়। তাছাড়া আশ্বিন-অগ্রাহায়ণ মাসেও বীপবপন কর হয়। অন্যান্য সময়ও  বোনা যেতে পারে।</p>

                <p className="card-text fw-bold">বীজের পরিমাণঃ</p>
                <p className="card-text">প্রতি শতকে ১০০-১২৫ গ্রাম, হেক্টর প্রতি ৮-১০ কেজি।</p>

                <p className="card-text fw-bold">জমি তৈরিঃ</p>
                <p className="card-text">৪ - ৫ টি চাষ ও মই দিয়ে ভালভাবে জমি তৈরি করতে হয়।</p>

                <p className="card-text fw-bold">সার প্রয়োগ পদ্ধতিঃ</p>
                <p className="card-text">গোবর, টিএসপি সম্পূর্ণ পরিমাণ ও অর্ধেক এমওপি সার শেষ চাষের সময় জমিতে প্রয়োগ করতে হয়। পরে বীজ বোনার ২০ দিন পর ১০০ গ্রাম ইউরিয়া ও বাকি অর্ধেক এমওপি সার জমিতে উপরি প্রয়োগ করতে হবে।</p>

                <p className="card-text fw-bold">বীজ বপনঃ</p>
                <p className="card-text">২ মিটার দূরত্বে সারি করে ২৫-৩০ সেমি. দূরে দূরে বীজ বুনতে হয়। জাত হিসেবে সারির দূরত্ব ১ মিটার বাড়ানো বা কমানো যায়।</p>

                <p className="card-text fw-bold">পারিচর্যাঃ</p>
                <p className="card-text">চারা বড় হলে মাচা বা বাউনি দিতে হবে। জমিতে পানির যাতে অভাব না হয় সে জন্য প্রয়োজন অনুসারে সবসময় সেচ দিতে হবে। আগাছা পরিষ্কার রাখতে হবে। পোকামাকড় ও রোগ ব্যবস্থাপনা শিমের মতই। জাব পোকা, ফল ছিদ্রকারী পোকা ও মোজেইক রোগ বরবটি চাষের বড় সমস্যা।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহ ও ফলনঃ</p>
                <p className="card-text">বীজ বোনার ৫০ - ৬০ দিন পর থেকেই বরবটি সংগ্রহ করা যায়। শতক প্রতি ফলন ৩০ - ৬০ কেজি, হেক্টর প্রতি১০ - ১২ টন।</p>

            </div>
        </div >

    );
};

export default BorbotiInfo;