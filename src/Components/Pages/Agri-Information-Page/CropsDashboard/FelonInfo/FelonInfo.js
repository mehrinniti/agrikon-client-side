import React from 'react';
import { Divider, Typography } from '@mui/material';
import felon from '../../../../../images/Agri-info/crops/felon_ফেলন.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const FelonInfo = () => {

    // dynamic title
    useDocumentTitle("ফেলন");

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
                ফেলন
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={felon} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>পুষ্টি মূল্য : </b><br />ফেলনে প্রচুর পরিমানে খাদ্য শক্তি ও প্রোটিন আছে। উপযুক্ত জমি ও মাটি:বেলে দোআঁশ থেকে এটেল দোআঁশ মাটিতে ফেলন চাষ করা যায়। জমি উচুঁ ও মাঝারি উচুঁ ও মাঝারি উঁচু নিকাশ যুক্ত হওয়া দরকার।</p>
                            <p className="card-text"><b>জাত:</b><br /><b>বারি ফেলন-১ (বোস্তামী): </b>বীজত্বকে ছাই রঙের সাথে কালচে দাগ থাকে। হাজার বীজের ওজন ৯০ থেকে ৯৫ গ্রাম। ফলন হেক্টর প্রতি ১.১ থেকে ১.৪ টন। ডাল রান্না হওয়ার সময়কাল ১৭ থেকে ২২ মিনিট। বীজে আমিষের পরিমাণ ২৫ থেকে ৩০%।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>বীজ বপন: </b><br />বীজ প্রধানত ছিটিয়ে বপন করা হয়। লাইনে বপন করলে লাইন থেকে লাইনের দূরত্ব ৩০ থেকে ৪০ সেন্টিমিটার এবং গাছ থেকে গাছ ১০ সেন্টিমিটার রাখতে হবে। অগ্রাহায়ণ (মধ্য নভেম্বর থেকে মধ্য ডিসেম্বর) মাস বীজ বপনের উপযুক্ত সময়। প্রতি হেক্টরে ৪০ থেকে ৫০ কেজি বীজের দরকার হয়।</p>

                <p className="card-text"><b>গুদামজাত ডালের পোকা ব্যবস্তাপনা </b><br /><b>ভূমিকা: </b>পূর্ণবয়স্ক পোকা ও কীড়া উভয়ই গুদামজাত</p>
                <p className="card-text"><b>ক্ষতির নমুনা: </b><br />এ পোকা ডালের খোসা ছিদ্র করে ভিতরে ঢুকে শাঁস খেতে থাকে। ফলে দানা হাল্কা হয়ে যায়। এর ফলে বীজের অঙ্কুরোদগম ক্ষমতা নষ্ট হয়ে যায় এবং খাওয়ার অনুপযুক্ত হয়ে পড়ে।</p>
                <p className="card-text"><b>ব্যবস্তাপনা: </b><br />গুদামজাত করার আগে দানা ভালভাবে পরিষ্কার করতে হয়। ডালের দানা শুকিয়ে পানির পরিমান ১২% এর নিচে আনতে হবে। বীজের জন্য টন প্রতি ৩০০ গ্রাম ম্যালাথিয়ন বা সেভিন ১০% গুড়া মিশিয়ে পোকার আক্রমণ প্রতিরোদ করা যায়। ফসটক্সিন ট্যাবলেট ২টি বড়ি প্রতি ১০০ কেজি গুদামজাত ডালে ব্যবহার করতে হয়। এ বড়ি আবদ্ধ পরিবেশে ব্রবহার করতে হয়।</p>
                <p className="card-text"><b>ফসল সংগ্রহ:</b> মধ্য চৈত্র থেকে শেষ সপ্তাহ(মার্চের শেষ থেকে এপ্রিলের প্রথম)।</p>

            </div>
        </div >

    );
};

export default FelonInfo;