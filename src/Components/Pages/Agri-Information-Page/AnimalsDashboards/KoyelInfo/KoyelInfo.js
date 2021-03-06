import React from 'react';
import { Divider, Typography } from '@mui/material';
import koyel from '../../../../../images/Agri-info/Animals/koel_কোয়েল.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const KoyelInfo = () => {

    // dynamic title
    useDocumentTitle("কোয়েল পালন");

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
                component="div"
            >
                কোয়েল পালন
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={koyel} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>পোল্ট্রিতে এগারটি প্রজাতি রয়েছে, তন্মধ্যে কোয়েল একটি ছোট আকারের গৃহপালিত পাখি। অন্যান্য পোল্ট্রির তুলনায় কোয়েলের মাংস এবং ডিম গুনগতভাবে শ্রেষ্ঠ। আনুপাতিক হারে কোয়েলের ডিমে কোলেস্টেরল কম এবং আমিষ বেশী। একটি মুরগীর পরিবর্তে ৮টি কোয়েল পালন করা সম্ভব। কাজেই বাড়ীর আঙ্গিনায় ঘরের কোনে ১০-২০ টা কোয়েল অতি সহজেই পালন করা যায়। কোয়েল পাখি প্রতিপালন করে পারিবারিক পুষ্টি যোগানের সাথে সাথে অতিরিক্ত কিছু আয় করা সম্ভব। অল্প মূল্যে, অল্প জায়গায়, অল্প খাদ্যে কোয়েল পালন করা যায়।</p>
                            <p className="card-text"><b>কোয়েল পালনের সুবিধা</b><br />
                                • কোয়েল দ্রুত বাড়ে, ৬-৭ সপ্তাহে ডিমপাড়া শুরু করে এবং বছরে ২৫০-২৬০ টি ডিম পাড়ে ।<br />
                                • ডিমে কোলেস্টেরল কম এবং প্রেটিনের ভাগ বেশি ।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>• কোয়েলর দৈহিক ওজনের তুলনায় ডিমের শতকরা ওজন বেশী।<br />
                    • ৮-১০ টা কোয়েল একটি মুরগীর জায়গায় পালন করা যায় এবং ১৭-১৮ দিনে ডিম ফুটে বাচ্চা বের হয়।<br />
                    • রোগ বালাই খুব কম এবং খাবার খুবই কম লাগে।<br />
                    • বাংলাদেশের আবহাওয়া কোয়েল পালনের উপযোগী।<br />
                    • অল্প পুঁজি বিনিয়োগ করে অল্প দিনে বেশী লাভ করা যায়।</p>
                <p className="card-text"><b>কোয়েলের জাত</b><br />পৃথিবীতে বর্তমানে ১৭-১৮ জাতের কোয়েল আছে। অন্যান্য পোল্ট্রির মত ইহার মাংস এবং ডিম উৎপাদনের জন্য পৃক পৃক জাত আছে। পৃথিবীতে কোয়েলের বিভিনড়ব জাতের মধ্যে “জাপানীজ কোয়েল” অন্যতম। উলেস্নখ্য বিভিনড়ব জাতের কোয়েলের প্রকৃত উৎস জাপানীজ কোয়েল।
                    পৃথিবীতে বর্তমানে ১৭-১৮ জাতের কোয়েল আছে। অন্যান্য পোল্ট্রির মত ইহার মাংস এবং ডিম উৎপাদনের জন্য পৃক পৃক জাত আছে। পৃথিবীতে কোয়েলের বিভিনড়ব জাতের মধ্যে “জাপানীজ কোয়েল” অন্যতম। উলেস্নখ্য বিভিনড়ব জাতের কোয়েলের প্রকৃত উৎস জাপানীজ কোয়েল।</p>
                <p className="card-text"><b>প্রজনন</b><br />শুধুমাত্র ডিম ফুটাতে চাইলে স্ত্রী এবং পুরুষ কোয়েল একত্রে রাখার প্রয়োজন। স্ত্রী কোয়েল প্রতিপালন অধিক লাভজনক। আশানুরুপ ডিমের উর্বরতা পেতে হলে ৩ টি স্ত্রী কোয়েলের সাথে ১টি পুরুষ কোয়েল দেওয়ার ৪ (চার) দিন পর থেকে বাচ্চা ফুটানোর জন্য ডিম সংগ্রহ করা উচিৎ। স্ত্রী কোয়েল থেকে পুরুষ কোয়েল আলাদা করার পর তৃতীয় দিন পর্যন্ত ফুটানোর ডিম সংগ্রহ করা যেতে পারে।</p>
                <p>বাংলাদেশের আবহাওয়ায় কোয়েল ৬-৭ সপ্তাহ বয়সে ডিম পাড়া শুরু করে এবং ৮-১২ মাস পর্যন্ত ডিম পাড়া অপরিবর্তিত থাকে। উপযুক্ত পরিবেশে প্রম বছর গড়ে ২৫০-৩০০ টি ডিম পাড়ে। দ্বিতীয় বছরের ডিমের উৎপাদন প্রম বছরের উৎপাদনের শতকরা ৪৮ ভাগ। কোয়েল ডিমের উর্বরতা শতকরা ৮২-৮৭ ভাগ। ডিমপাড়া শুরুর প্রম দুই সপ্তাহের ডিম ফুটাতে বসানো উচিৎ নয়। কোয়েলের ডিমের গড় ওজন ১০-১২ গ্রাম।</p>
                <p className="card-text"><b>কোয়েলের বাচ্চার ব্রুডিং এবং যতড়ব</b><br />সদ্য ফুটন্ত কোয়েলের বাচ্চা খুবই ছোট থাকে, ওজন মাত্র ৫-৭ গ্রাম। এ সময় যে কোন রকম ত্রুটিপূর্ণ ব্যবস্থাপনার প্রভাব স্বাভাবিক দৈহিক বৃদ্ধি, ডিম উৎপাদন এবং বেঁচে থাকার উপর পড়ে। এমতাবস্থায় খাদ্যে প্রয়োজনীয় পুষ্টিমান এবং কাম্য তাপমাত্রা অত্যন্ত সতর্কতার সাথে বজায় রাখতে হবে। বাচ্চাকে ব্রুডিং বা তাপ দেওয়া খাঁচায় এবং লিটারে করা যায় ।</p>

                <p><b>ছক-১: ব্রুডিংকালীন সময়ে প্রয়োজনীয় তাপমাত্রা</b></p>
                <div className='d-flex g-0'>
                    <div className='col'>
                        <p><b>বাচ্চার বয়স</b></p>
                        <p>প্রথম সপ্তাহ</p>
                        <p>দ্বিতীয় সপ্তাহ</p>
                        <p>তৃতীয় সপ্তাহ</p>
                        <p>চর্তুথ সপ্তাহ</p>
                    </div>
                    <div className='col-10'>
                        <p><b>তাপমাত্রা</b></p>
                        <p>৩৫০সেঃ (৯৫০ ফাঃ)</p>
                        <p>৩২.২০সেঃ (৯০০ ফাঃ)</p>
                        <p>২৯.৫০ সেঃ (৮৫০ফাঃ)</p>
                        <p>২৭.৬০ সেঃ (৮০০ ফাঃ)</p>
                    </div>
                </div>

                <p>ইনকুবেটরে বাচ্চা ফুটার ২৪ ঘন্টার মধ্যে ব্রুডিং ঘরে এনে প্রমে গুকোজ এবং এমবাভিট ডলিউ এস পানির সংগে পর পর তিনদিন খেতে দেয়া ভাল এবং পরে খাদ্য দিতে হবে। প্রম সপ্তাহ খবরের কাগজ বিছিয়ে তার উপর খাবার ছিটিয়ে দিতে হবে এবং প্রতিদিন খবরের কাগজ পরিবর্তন করতে হবে। এক সপ্তাহ পর ছোট খাবার পাত্র বা ফ্লাট ট্রে ব্যবহার করা যেতে পারে। পানির পাত্রে বাচ্চা যাতে পড়ে না যায় সে জন্য মার্বেল অথবা কয়েক টুকরা পাথর খন্ড পানির পাত্রে রাখতে হবে। সর্বদাই পরিস্কার পরিচছনড়ব পানি সরবরাহ করতে হবে।</p>
                <p className="card-text"><b>বাসস্থান</b><br />বাণিজ্যিকভাবে কোয়েল পালনের জন্য লিটার পদ্ধতির চেয়ে কেইজে পালন অধিক লাভজনক। বাচ্চা অবস্থায় প্রতিটি কোয়েলের জন্য খাঁচায় ৭৫ বঃ সেঃ মিঃ এবং মেঝেতে ১০০ বঃ সেঃ মিঃ জায়গায় দরকার। অন্যদিকে বয়স্ক কোয়েলের বেলায় খাঁচায় প্রতিটির জন্য ১৫০ বঃ সেঃ মিঃ এবং মেঝেতে ২৫০ বঃ সেঃ মিঃ জায়গা প্রয়োজন। কোয়েলের ঘরে পর্যাপ্ত আলো ০ ০ বাতাসের ব্যবস্থা রাখতে হবে। তাপমাত্রা ৫০ -৭০ ফাঃ হওয়া ভাল। স্ত্রী কোয়েল এবং পুরুষ কোয়েল যত তাড়াতাড়ি সম্ভব পৃথক পথৃক ভাবে রাখতে হবে।</p>
                <p className="card-text"><b>খাচায় কোয়েল পালন</b><br />খাচায় ৫০টি বয়স্ক কোয়েলের জন্য ১২০ সেঃ মিঃ দৈর্ঘ্য, ৬০ সেঃ মিঃ প্রস্থ এবং ৩০ সে মিঃ উচ্চতা বিশিষ্ট একটি খাচার প্রয়োজন। খাচার মেঝের জালিটি হবে ১৬-১৮ গেজ্ি‌ ৩ সপ্তাহ পর্যন্ত বাচ্চার খাচার মেঝের জালের ফাক হবে ৩ মিঃ মিঃx৩ মিঃ মিঃ এবং বয়স্ক কোয়েলের খাচায় মেঝের জালের ফাক হবে ৫ মিঃ মিঃx৫ মিঃ মিঃ। খাচার দুই পার্শ্বে একদিকে খাবার পাত্র অন্যদিকে পানির পাত্র সংযুক্ত করে দিতে হবে। খাচায় ৫০টি কোয়েলের জন্য তিন সপ্তাহ বয়স পর্যন্ত ২৫ সেঃ মিঃ বা ১০ ইঞ্চি উচ্চতা বিশিষ্ট ২৮ বঃ সেঃ মিঃ বা ৩ বর্গফুট জায়গার প্রয়োজন।</p>
                <p className="card-text"><b>খাদ্য ব্যবস্থাপনা</b><br />বাচ্চা, বাড়ন্ত অথবা প্রজনন কাজে ব্যবহৃত কোয়েলের জন্য স্ট্যান্ডার্ড রেশন বাজারে সহজলভ্য নয়। কোয়েলের রেশনকে তিনভাগে ভাগ করা যায়, যথাঃ স্টার্টার, বাড়ন্ত, এবং লেয়ার বা ব্রিডার । ডিম পাড়া কোয়েলের প্রতি কেজি খাবারে ২.৫-৩.০% ক্যালসিয়াম থাকতে হবে। ডিমের উৎপাদন ধরে রাখার জন্য গরমের সময় ৩.৫% ক্যালসিয়াম প্রয়োজন।</p>

            </div>
        </div >


    );
};

export default KoyelInfo;