import React from 'react';
import { Divider, Typography } from '@mui/material';
import kochu from '../../../../../images/Agri-info/crops/kochu_কচু.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const KochuInfo = () => {

    // dynamic title
    useDocumentTitle("কচু");

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
                কচু
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={kochu} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p><b>পুষ্টি মূল্য : </b>কচুতে ভিটামিন এ এবং প্রচুর পরিমানে লৌহ থাকে।</p>
                            <p className="card-text fw-bold">ব্যবহার : </p>
                            <p className="card-text">যে সমস্ত কচু দাড়াঁনো পানিতে চাষ করা যায় তাকে পানি কচু বলে। আমাদের দেশে কচু একটি সুস্বাদু সবজি হিসেবে পরিচিত। বাংলাদেশের পানি কচুর বিভিন্ন নাম রয়েছে যেমন নারিকেল কচু, জাত কচু, বাশঁ কচু ইত্যাদি।</p>

                            <p className="card-text fw-bold">উপযুক্ত জমি ও মাটি :</p>
                            <p className="card-text">পলি দোআঁশ ও এটেল মাটি পানি কচু চাষের জন্য উপযুক্ত ।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>

                <p className="card-text fw-bold">জাত পরিচিতি :<br />জাতের নাম/লতিরাজ</p>
                <p className="card-text fw-bold">বৈশিষ্ট্য :</p>
                <p className="card-text">লতি লম্বায় ৯০-১০০ সেমি. সামান্য চেপ্টা, সবুজ । লতি সিদ্ধ করলে সমানভাবে সিদ্ধ এবং গলা চুলকানি মুক্ত হয়। বোঁটা এবং পাতার সংযোগস্থলের উপরিভাগের রং বেগুনি। জীবনকাল ১৮০-২১০ দিন। বাংলাদেশের সব অঞ্চলেই এর চাষাবাদ করা যায়।</p>

                <p className="card-text fw-bold">ফলন/(টন/হেক্টর)<br />লতি : ২৫-৩০<br />কান্ড : ১৮-২</p>
                <p className="card-text fw-bold">চারা রোপণ :</p>
                <p className="card-text fw-bold">আগাম :</p>
                <p className="card-text">ফসলের জন্য কার্তিক (মধ্য অক্টোবর থেকে মধ্য নভেস্বর)| নাবী ফসলের জন্য মধ্য ফাল্গুন থেকে মধ্য বৈশাখ (মার্চ-এপ্রিল) মাসে লাগানো যায়। দক্ষিণাঞ্চলে বৎসরের যেকোন সময় লাগানো যায়। প্রতি শতকে প্রায় ১৫০টি লতা রোপণের জন্য প্রয়োজন। জমি ভালভাবে তৈরি করে লাইন থেকে লাইন ২ ফুট (৬০ সে.মি) এবং গাছ থেকে গাছ ১.৫ ফুট (৪৫ সে.মি) রাখতে হবে।</p>

                <p className="card-text fw-bold">সেচ ও আগাছা ব্যবস্থাপনা :</p>
                <p className="card-text">পানি কচুর গোড়ায় দাড়াঁনো পানি রাখতে হবে এবং দাঁড়ানো পানি মাঝে মাঝে নাড়িয়ে দিতে হবে। লতিরাজ জাতের জন্য দাঁড়ানো পানির গভীরতা ৮-১০ সে.মি হওয়া দরকার।</p>

                <p><b>রোগ ব্যবস্থাপনা :</b>কচুর পাতার মড়ক রোগ</p>
                <p className="card-text fw-bold">ক্ষতির নমুনা :</p>
                <p className="card-text">পাতার উপর বেগুনি থেকে বাদামি রংয়ের গোলাকার দাগ পড়ে। পরবর্তীতে এ সমস্ত দাগ আকারে বেড়ে একত্রিত হয়ে যায় এবং পাতা ঝলসে যায়। পরে তা কচু ও কন্দে বিস্তার লাভ করে।</p>

                <p className="card-text fw-bold">অনুকূল পরিবেশ :</p>
                <p className="card-text">উচ্চ তাপমাত্রা, আর্দ্র আবহাওয়া ও পর পর ৩-৪ দিন বৃষ্টি থাকলে এ রোগের মাত্রা খুব বেড়ে যায়।</p>

                <p className="card-text fw-bold">ব্যবস্থাপনা :</p>
                <p className="card-text">রোগ দেখা দেওয়ার সাথে সাথে প্রতি লিটার পানিতে ২ গ্রাম রিডোমিল এম জেড-৭২ ডব্লিউ অথবা ডাইথেন এম ৪৫ মিশিয়ে ১৫ দিন পর পর ৩ থেকে ৪ বার প্রয়োগ করতে হবে। প্রয়োগ করার আগে ট্রিকস মিশিয়ে নিতে হয়।</p>

                <p className="card-text fw-bold">ফসল সংগ্রহ :</p>
                <p className="card-text">
                    রোপণের ২ মাস পর থেকে ৭ মাস পর্যন্ত লতি হয়ে থাকে।</p>

            </div>
        </div >


    );
};

export default KochuInfo;