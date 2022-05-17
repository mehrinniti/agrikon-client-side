import React from 'react';
import { Divider, Typography } from '@mui/material';
import pan from '../../../../../images/Agri-info/crops/pan_পান.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const PanInfo = () => {

    // dynamic title
    useDocumentTitle("পান");

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
                পান
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pan} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>ভূমিকা: </b><br />পান একটি অর্থকরী ফসল। পানে নানা রকম ভেষজ গুণ রয়েছে।</p>
                            <p className="card-text"><b>মাটি: </b><br />পান চাষের জন্য দরকার উঁচু, বন্যামুক্ত, বেলে দোআঁশ বা এটেল দোআঁশযুক্ত জমি। ছায়াযুক্ত নাতিশীতোষ্ণ আবহাওয়া পান চাষের জন্য ভাল।</p>
                            <p className="card-text"><b>জমি তৈরি: </b><br />জমিকে আগাছামুক্ত, সমতল ও উঁচু করে তৈরি করে প্রতি ৬০ সে.মি পর পর ২০ সে.মি চওড়া করে নালা তৈরি করে নিতে হয়। বরোজের বাইরে একটি বড় নিকাশ নালার সাথে ছোট নালাগুলোকে যুক্ত করে দিতে হয়। জমি তৈরির সময় শেষ চাষের পর মাটিতে একর প্রতি ২০০ কেজি তিলের খৈল বা নিম তৈল, ৪০ কেজি টিএসপি ও ৬০ কেজি </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>এমওপি সার মিশিয়ে দেয়া দরকার। দু’নালার মাঝখানের ভিটিতে চারা রোপণ করতে হয়। চারা রোপণের আগে ৪০% ফরমালিন বা ১% বোঁর্দো মিশ্রণ দিযে মাটি মোধন করে নিলে গোড়া পচা রোগসহ মাটিবাহিত অন্যান্য রোগ হওয়ার আশংকা কম থাকে।</p>
                <p className="card-text"><b>বরোজ তৈরি: </b><br />পান গাছকে ছায়া দেয়া ও প্রবল বাতাসের হাত থেকে রড়্গা করার জন্য উন্নতমানের বরোজ তৈরি করা একান্ত জরুরি। বরোজ তৈরিতে পাকা বাঁশ/খুঁটি, বাঁশের চটা, ছন বা কাশ জাতীয় ঘাস, খড় এসবের দরকার হয়। বরোজ তৈরির জন্য প্রথমে ২.৫-৩.০ মিটার লম্বা পাকা বাঁশের খুঁটি তৈরি করে গোড়ায় আলকাতরার প্রলেপ দিতে হবে। এতে বরোজে উঁইয়ের আক্রমণ হবে না। খুঁটি চারিদিকে পোঁতার পর তাতে বাঁশের চটা, ছন/খড় দিয়ে ছাউনি ও শুকনা কলাপাতা, খেজুর পাতা, সুপাড়ি পাতা এসব দিয়ে বেষ্টনী বা বেড়া দেয়া হয়। ভেতরে চারা রোপনের পর প্রয়োজনমত কাঠি দিয়ে বেঁধে দেয়া হয়।</p>
                <p className="card-text"><b>চারা রোপণ: </b><br />বরোজের ভেতরে চারিদিকে ৬০ সে.মি চওঢ়া রাসত্মা রাখতে হয়। প্রতিটি বেড ১২০ সে.মি চওড়া করে তৈরি করে নেয়া দরকার। প্রতিটি বেডে দুই লাইনে চারা রোপণ করতে হয়। একটি লাইন থেকে আরেকটি লাইনের দূরত্ব ৩০ সে.মি রাখতে হয়। আবার প্রতি দুই বেডের মাঝখানে ৩০ সে.মি নালা রাখা দরকার।</p>
                <p>সাধারণত বর্ষাকাল বা আষাঢ় মাস চারা লাগানোর উপযুক্ত সময়। কাটিং সামান্য কাৎ করে (৪৫ ডিগ্রী) অর্ধেক অংশ মাটির ভেতর এবং বাকি অংশ চোখ বা মুকুল মাটির ওপর রাখা হয়। দ্বিসারি পদ্ধতিতে ৫-১৫ সে.মি লম্বা কাটিং লাগে শতক প্রতি ৪০০-৫০০ টি।</p>
                <p className="card-text"><b>রোপণ পরবর্তী পরিচর্যা: </b><br />কাটিং থেকে অনেক সময় অনেকগুলো চারা জন্মে, সেড়্গেত্রে অপ্রয়োজনীয় চারা তুলে পাতলা করে দিতে হবে। লতা বাড়তে বাড়তে বরোজের ছাউনি বা ছাদে ঠেকে গেলে নীচের দিকের পাতা তুলে রতাটি নামিয়ে দিতে হয়। এতে পান পাতার আকার স্বাভাবিক থাকে এবং ফলনও বেশি পাওয়া যায়। বছরে ৩/৪ বার গোড়ার মাটি তুলে দেয়া দরকার।</p>
                <p className="card-text"><b>সার প্রয়োগ: </b><br />জমিতে জৈব সারের পাশাপশি সুষম মাত্রায় রাসায়নিক সার প্রয়োগ করলে ফলন পাওয়া যায়। প্রতি শতক জমির জন্য খৈল ২০ কেজি, ২.৫ কেজি এসএসপি, ৬০০ গ্রাম এমওপি এবং ১.৮ কেজি ইউরিয়া সার সমান চার ভাগ করে বছরে ৪ বার জমিতে প্রয়োগ করতে হয়। বর্ষাকালে দু’দফায়, শরৎকালে ১ বার ও বসনত্মকালে ১ বার দিতে হয়।</p>
                <p className="card-text"><b>সেচ ব্যবস্থাপনা: </b><br />পরিমিত পানি সেচ দিতে হবে এবং বেশি পানি তাকলে তা বের করে দিতে হবে। চারা রোপণের পর ঝাঝরি দিয়ে হালকা সেচ দিতে হবে।</p>
                <p className="card-text"><b>পাতা তোলা: </b><br />বর্ষাকালে চারা রোপণ করা হলে ৫-৬ মাস পর থেকেই পাতা তোলা শুরু করা যায়। নচিন দিকের পাতা আগে তুলতে হয়। এতটি পাতা সম্পূর্ণভাবে পরিণত হতে ৬-৮ সপ্তাহ সময় দরকার হয়। কচি পাতার চেয়ে বয়স্ক অথচ সবুজ-এমন পাতার চাহিদাই বেশি।</p>
                <p className="card-text"><b>রোগবালাই: <br />গোড়া পঁচা: </b><br />এটি এক ধরণের ছত্রাকের আক্রমণের কারনে হয়ে থাকে। বোঁর্দে মিশ্রণ দিযে মাটি শোধন করলে রোগের আক্রমণ কম হয়। আক্রমণ বেশি হলে ডায়থেন এম-৪৫ বা রিডোমিল এম জেড-৭২ ছত্রাক নাশক স্প্রে করতে হয।</p>
                <p className="card-text"><b>পাতায় দাগ পড়া: </b><br />এটি এক ধরণের ছত্রাকের আক্রমণের কারনে হয়ে থাকে। আক্রান- পাতা পুড়িয়ে ফেলতে হয়। আক্রমণ বেশি হলে কুপ্রাভিট বা বাভিস্টিন জাতীয় ছত্রাকনাশক স্প্রে করতে হয়।</p>
                <p className="card-text"><b>পাতা পঁচা: </b><br />এটি এক ধরণের ব্যাকটেরিয়ার আক্রমণের কারনে হয়। বরোজ সব সময় পরিস্কার পরিচ্ছন্ন রাকা দরকার। আক্রমণ শুরু হওযা মাত্রই লতা ও মাটিতে বোঁর্দে মিশ্রণ স্পে করতে হয়।</p>
                <p className="card-text"><b>ফলন: </b><br />বছরে ১০ শতকের একটি বরোজ থেকে গড়ে ৪-৫ লাখ পান পাতা উৎপন্ন হয়।</p>

            </div>
        </div >

    );
};

export default PanInfo;