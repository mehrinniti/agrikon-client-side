import React from 'react';
import { Divider, Typography } from '@mui/material';
import goru from '../../../../../images/Agri-info/Animals/gobadi_গরু.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const GoruInfo = () => {

    // dynamic title
    useDocumentTitle("গরু");

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
                গরু
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={goru} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <h4><b>গরু মোটাতাজাকরণ প্রযুক্তি</b></h4>
                            <p>বাংলাদেশে গরুর মাংস খুব জনপ্রিয় এবং চাহিদাও প্রচুর। তাছাড়া মুসলমাদের ধমীয় উৎসব কুরবানীর সময় অনেক গরু জবাই করা হয়। সূতরাং “ গরু মোটাতাজাকরন” পদ্ধতি বাংলাদেশের জন্য খুব গুরুত্বপূর্ন এবং একটি লাভজনক ব্যবসা।</p>
                            <p>গরু মোটাতাজাকরন প্রক্রিয়ায় ধারাবহিকভাবে যে সকল বিষয়গুলো সম্পন্ন করতে হব তা নিম্নরুপ।</p>
                            <p>০১. পশু নির্বাচন, ০২. কৃমিমুক্তকরন ও টিকা প্রদান , ০৩. পুষ্টি ও খাদ্য ব্যবস্থাপনা এবং ০৪. বাজারজাতকরন।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>০১. পশু নির্বাচন : </b><br />মোটাতাজাকরণ  কর্মসূচীর জন্য গরু ক্রয়ের সময় প্রধান দুটি বিবেচ্য বিষয় হলো বয়স ও শারীরিক গঠন।</p>
                <p className="card-text"><b>ক. বয়স নির্ধারন: </b>মোটতাজা করার জন্য সাধারনত ২ থেকে ৫ বছরের গরু ক্রয় করা যেতে পারে, তবে ৩ বছরের গরু হলে ভাল।</p>
                <p className="card-text"><b>খ. শারীরিক গঠন : </b>মোটাতাজাকরণে ব্যবহৃত গরুর দৈহিক গঠন একটি গুরুত্বপূর্ণ বিষয়। এজন্য নিম্নলিখিত বিষয়গুলো মনে রেখে গরু নির্বাচন করা জরুরী।<br />

                    •    দেহ হবে বর্গাকার ।<br />
                    •    গায়ের চামড়া হবে ঢিলা ( দুই আঙ্গুল দিয়ে ধরে টান দিয়ে দেখতে হবে)।<br />
                    •    শরীরের হাড়গুলো আনুপাতিকহারে মোটা, মাথাটা চওড়া, ঘাড় চওড়া এবং খাটো।<br />
                    •    পাগুলো খাটো এবং সোজাসুজিভাবে শরীরের সাথে যুক্ত।<br />
                    •    পিছনের অংশ ও পিঠ চওড়া এবং লোম খাটে ও মিলানো ।<br />
                    •    গরু অপুষ্ট ও দূর্বল কিন্তু রোগা নয়।</p>
                <p className="card-text"><b>০২. কৃমিমুক্তকরন  : </b><br />পশু ডাক্তারের নির্দেশনা মত কৃমির ঔষধ ব্যবহার করতে হবে। গরু সংগ্রহের পর পরই পালের সব গরুকে একসাথে কৃমিমুক্ত করা উচিত। তবে প্রতি
                    ৭৫ কেজি দৈহিক ওজনের জন্য ১ টি করে এনডেক্স বা এন্টিওয়ার্ম টাবলেট ব্যবহার  করা যেতে পারে।</p>
                <p className="card-text"><b>০৩. টিকা প্রদান : </b><br />পূর্ব থেকে টিকা না দেওয়া থাকলে খামারে আনার পরপরই সবগুলো গরুকে তড়কা, বাদলা এবং ক্ষুরা রোগের টিকা দিতে হবে। এ ব্যপারে নিকটস্থ পশু হাসপাতলে যোগাযোগ করতে হবে।</p>
                <p className="card-text"><b>০৪. ঘর তৈরী ও আবসন ব্যবস্থাপনাঃ  </b><br />আমদের দেশের অধিকাংশ খামারী ২/৩ টি পশু মোটাতাজা করে থাকে, যার জন্য সাধারনত আধুনিক সেড করার প্রয়োজন পড়েনা। তবে যে ধরনের ঘরেই গরু রাখা হোক ঘরের মধ্যে পর্যন্ত আলো ও বায়ু চলাচলের ব্যবস্থা থাকতে হবে। ঘরের মল- মূত্র ও অন্যান্য আবর্জনা যাতে সহজেই পরিস্কার করা যায় সে দিকে খেয়াল রেখে ঘরে তৈরী করতে হবে।</p>
                <p className="card-text"><b>০৫. পুষ্টি ও খাদ্য ব্যবস্থাপনাঃ </b><br />গরু মোটতাজাকরনে দুই ধরনের খাদ্যের সমন্বয়ে রশদ (রেশন) তৈরী করা হ হয়।<br />

                    •   আঁশ জাতীয়ঃ শুধু খড়, ইউ এম, সবুজ ঘাস ইত্যাদি । তবে এই প্রক্রিয়ায় খামারীদেরকে শুধু খড়ে পরিবর্তে ইউ এম এস খাওয়াতে হবে।<br />
                    •   দানারারঃ খৈল, ভূষি, চাষের কুড়া , খুদ, শুটকি মাছ, ঝিনুকের গুড়া, লবন ইত্যাদি। খাওয়ানের পরিমানঃ গরুকে তার ইচ্ছা অনুযায়ী, অর্থাৎ গরু যে পরিমান খেতে পারে সে পরিমান ইউ এম এস সরবারাহ করতে হব।<br />

                    •   কোন খামারী সবুজ ঘাস খাওয়াতে চাইলে প্রতি ১০০ কেজি কাঁচা  ঘাসের সাথে ৩ কেজি চিটাগুড়ে মিশিয়ে তা গরুতে খাওয়াতে পারেন। এক্ষেত্রে কাঁচা ঘাসেও গরুকে পর্যাপ্ত পরিমানে সরবরাহ করতে হবে।</p>
                <p className="card-text"><b>খ . দানাদর মিশ্রণঃ </b><br />খামারীদের সবিধার জন্য নীচের সারনীতে একটি দানাদার মিশ্রণ তৈরীর বিভিন্ন উপাদান পরিমান সহ উল্লেখ  করা হল। নিম্নের ছক অনুযায়ী অথবা প্রয়োজন অনুযায়ী খামারীগণ বিভিন্ন পরিমান মিশ্রণ তৈরী করে নিতে পারবেন।<br />
                    •  খাওয়ানের পরিমানঃ গরুকে তার দেহের ওজন অনুপাতে দানাদার খাদ্য সরবরাহ করতে হবে। পাশের দানাদার মিশ্রণটি গরুর ওজনের শতকরা ০.৮-১ ভাগ পরিমান সরবরাহ করলেই চলবে।<br />
                    •    খাওয়ানোর সময়ঃ দানাদার মিশ্রণটি এবারের না খাইয়ে ভাগে ভাগ করে সকালে এবং বিকালে খাওয়াতে হবে।<br />
                    •    পানিঃ গরুকে পর্যান্ত পরিমানে পরিস্কার খামার পানি সরবরাহ করতে হবে।</p>
                <p className="card-text"><b>০৬. দৈহিক ওজন নির্ণয়ঃ </b><br />মোটাতাজাকরন প্রক্রিয়ায় গরুকে দৈহিক ওজন নির্ণয় গুরুত্বপূর্ণ কাজ। কেননা গরুর খাদ্য সরবরাহ,ঔষধ সরবরাহ ইত্যাদি কাজগুলো করতে হয় দৈহিক ওজনের ভিত্তিতে।<br /> গরুর ওজন নির্নয়ের জন্য গরুকে সমান্তরাল জায়গায় দাড় করাতে হবে এবং ছবির নির্দেশিকা মোতাবেক ফিতা দ্বারা দৈর্ঘ্য ও বুকের বেড়ের মাপ নিতে হবে। এই মাপ নীচের সূত্রে বসালে গরুর ওজন পাওয়া যাবে।<br />দৈর্ঘ্য × বুকের বেড় (ফুট) × বুকের বেড় (ফুট) ....................................... = ওজন (কিলোগ্রাম)  ৬.৬০</p>
                <p className="card-text"><b>উপসাংহারঃ </b><br />উপরে বর্নিত পদ্বতি অনুযায়ী পালন করলে ৯০ থেকে ১২০ দিনের মধ্যেই গরু মোটাতাজাকরন করে বাজারজাত করা সম্ভব।</p>

            </div>
        </div >


    );
};

export default GoruInfo;