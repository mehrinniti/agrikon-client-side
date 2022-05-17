import React from 'react';
import { Divider, Typography } from '@mui/material';
import gada from '../../../../../images/Agri-info/crops/Merigold_গাঁদা ফুল.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const GadaInfo = () => {

    // dynamic title
    useDocumentTitle("গাঁদা");

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
                গাঁদা
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={gada} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text"><b>শীতে গাঁদা ফুলের চাষ</b><br />শীতকালের ফুলের মধ্যে গাঁদা অন্যতম। বিবাহ, জন্মদিন, বিবাহবার্ষিকী, গৃহসজ্জা, বিজয় দিবস, স্বাধীনতা দিবস ও শহীদ দিবসসহ সব অনুষ্ঠানেই গাঁদা ফুলের বিকল্প নেই। কেটে যাওয়া ত্বকের রক্ত পড়া বন্ধ করতে, কাটা ঘা শুকাতে ও জীবাণুনাশক হিসাবে গাঁদা পাতার রস খুব উপকারী।</p>
                            <p className="card-text"><b>জাতঃ</b><br />চাইনিজ , রাজগাঁদা, আফ্রিকান ও ফরাসি জাতের গাঁদা আমাদের দেশে বেশি চাষ হয়। রঙ ভেদে গাঁদার জাত হচ্ছে হলুদ, লাল, কমলা, গাঢ় খয়েরি, লাল হলুদের মিশ্রণ ইত্যাদি। আফ্রিকান জাতের গাছ সোজা ও লম্বা, ৩০-১০০ সেমি লম্বা হয়। ফুল কমলা,</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>হলুদ ও গাঢ় খয়েরি রঙের ছিটা দাগযুক্ত হয়। ফরাসি গাঁদার গাছ খাট ও ঝোপালো, ১৫-৩০ সেমি লম্বা হয়। ফুল আকারে ছোট,  প্রচুর ধরে ও রঙ লাল। কমলা সুন্দরীর গাছ খুব শক্ত। ফুল গাঢ় কমলা। শাখা প্রশাখা বেশি হওয়ায় ফুল বেশি ধরে। ফুলের আকার ৪.৫ থেকে ৫ সেমি। অনেক দিন পর্যন্ত ফুল ধরে। প্রতি গাছে ৫৫-৬০ টি ফুল পাওয়া যায়। রোগ সহনশীল।</p>
                <p className="card-text"><b>চারা তৈরিঃ</b><br />শাখা কলম ও বীজের মাধ্যমে গাঁদা ফুলের চারা তৈরি করা যায়। নভেম্বরে বীজতলায় বীজ বপন করে চারা উৎপাদন করতে হয়। সারা বছর চাষ করা গেলেও শীতকালে ফলন ভাল হয়। শাখা দিয়ে কলম করার জন্য গাঁদা গাছের শাখা ৮-১০ সেমি লম্বা করে কাটতে হবে। বীজতলায় শাখা ডালের টুকরাগুলো দু একটি পর্বসহ রোপন করতে হবে। উপযুক্ত সময় হচ্ছে মার্চ মাস। নিয়মিত সেচ দিয়ে বীজতলা ভিজিয়ে রাখতে হবে। ২০-২৫ দিনের মধ্যে পাতা গজায়।</p>
                <p className="card-text"><b>জমি নির্বাচন ও তৈরিঃ</b><br />উঁচু, সুনিষ্কাশিত দো আঁশ ও উর্বর মাটি গাঁদা চাষের উপযোগী। চার পাঁচবার চাষ ও মই দিয়ে মাটি ঝুরঝুরে করে জমি তৈরি করতে হবে। টবে বা পাত্রে চাষ করলে তিন ভাগ দো আঁশ এঁটেল বা দো আঁশ মাটির সাথে একভাগ গোবর মিশিয়ে সার মাটির মিশ্রন তৈরি করতে হবে। এই সার মাটি টবে বা পাত্রে বা পলিব্যাগে ভরতে হবে।</p>
                <p className="card-text"><b>সার প্রয়োগঃ</b><br />প্রতি শতক জমিতে পঁচা গোবর, ৪০ কেজি ইউরিয়া ২ কেজি, টিএসপি ৩ কেজি এবং এমওপি ২ কেজি সার প্রয়োজন । এ সারগুলো মাটির সাথে মিশাতে হবে।</p>
                <p className="card-text"><b>চারা রোপনঃ</b><br />বীজ থেকে অথবা শাখা থেকে তৈরি একমাস বয়সের চারা রোপন করতে হয়। ডিসেম্বর মাসে চারা রোপন করতে হয় । সারি থেকে সারির দূরত্ব ৪০-৫০ সেমি এবং চারা থেকে চারার দূরত ৩০-৪০ সেমি হওয়া উচিত। চারা উৎপাদন না করে সরাসরি বীজ থেকেও গাঁদা চাষ করা যায়। এক্ষেত্রে প্রতি শতকে ৫-৬ গ্রাম বীজ জমিতে বপন করতে হবে।</p>
                <p className="card-text"><b>পরিচর্যাঃ</b><br />মাটি শুকনোর আগেই সেচ দিতে হয়। গাছের গোড়াই পানি জমলে  নিষ্কাশনের ব্যবস্থা করতে হবে। আগাছা জন্মালেই নিড়ানি দিয়ে আগাছা পরিষ্কার করতে হবে। গাঁদা ফুলে রোগ বালাই তেমন হয়না। তবে জাব পোকা আক্রমণ করলে ২ মিলি ম্যালাথিয়ন ১ লিটার পানিতে মিশিয়ে স্প্রে করতে হবে। গাছ বড় হলে খুটির সাথে বেধে দিলে গাছ  সোজা থাকে। এতে ফুলের গুনগত মান ভাল হয়। গাছে ফুলের সংখ্যা বৃদ্ধি করার জন্য ফুল আসার একমাস আগে গাছের ডগা ভেঙে দিতে হবে। একটি শাখায় ঘন হয়ে অনেকগুলো ফুল বা কুঁড়ি ধরলে উপরের একটি বা দুইটি রেখে বাকিগুলো ভেঙ্গে দিতে হবে যাতে ফুল বড় হয়। চারা রোপনের ১৫ দিন পর প্রতি শতাংশে ৫০ গ্রাম ইউরিয়া উপরি প্রয়োগ করা যেতে পারে। চারা মারা গেলে সেখানে চারা রোপন করা উচিত। চারা ঘন হলেও পাতলা করতে হবে।</p>
                <p className="card-text"><b>ফুল সংগ্রহ ও ফলনঃ</b><br />ফুল কাঁচি বা ব্লেড দিয়ে বোটাসহ কেটে সংগ্রহ করতে হবে। খুব ভোরে ফুল তুলতে হয়। চারা রোপনের ৩৫-৪০ দিনের মধ্যে ফুল সংগ্রহ করা যায়। গড়ে একটি গাছে জাত ভেদে ১৫-৪০ টি ফুল ধরে।</p>

            </div>
        </div >

    );
};

export default GadaInfo;