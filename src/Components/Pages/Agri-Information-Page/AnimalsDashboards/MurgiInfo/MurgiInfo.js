import React from 'react';
import { Divider, Typography } from '@mui/material';
import murgi from '../../../../../images/Agri-info/Animals/murgi_মুরগি.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const MurgiInfo = () => {

    // dynamic title
    useDocumentTitle("মুরগি পালন");

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
                noWrap
                component="div"
            >
                মুরগি পালন
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={murgi} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <h3><b>মুরগি পালন ও খামার স্হাপনা</b></h3>
                            <p className="card-text"><b>১. আর্থসামাজিক উন্নয়নঃ</b><br />দেশের আর্থসামাজিক উন্নয়নে হাঁস-মুরগির গুরুত্ব অপরিসীম। তুলনামূলক স্বল্প বিনিয়োগ এবং অল্প ভূমিতে বাস্তবায়নযোগ্য বিধায় জাতীয় অর্থনীতিতে এর গুরুত্ব উত্তোরোত্তর বৃদ্ধি পাচ্ছে।</p>
                            <p className="card-text"><b>২. আত্ম-কর্মসংস্হানঃ</b><br />হাঁস-মুরগি পালন, বেকার যুব সমাজ, ভূমিহীন কৃষক এবং দুস্হ গ্রামীন মহিলাদের আত্ম-কর্মসংস্হানের একটি উল্লেখযোগ্য উপায়।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>৩. প্রাণিজ আমিষের উৎসঃ</b><br />দেশের অধিকাংশ মানুষ পুষ্টি সমস্যায় আক্রান্ত। হাঁস-মুরগির মাংস ও ডিম উন্নতমানের প্রাণিজ আমিষের উৎস। মাংস ও ডিমের মাধ্যমে প্রাণিজ আমিষের ঘাটতি পূরণ করে এই সমস্যা সমাধান করা যায়।</p>
                <p className="card-text"><b>৪. আয়ের উৎসঃ</b><br />আদিকাল থেকে গ্রাম বাংলার মহিলারা বাড়তি আয়ের উৎস হিসাবে হাঁস-মুরগি পালন করে আসছে।</p>
                <p className="card-text"><b>৫. জৈব সারঃ</b><br />হাঁস-মুরগির বিষ্ঠা উন্নতমানের জৈব সার যা ব্যবহার করে কৃষি ফসল উৎপাদনে লাভবান হওয়া যায়।</p>
                <p className="card-text"><b>৬. অন্যান্য শিল্পের উপকরণ হিসাবে হাঁস-মুরগির উপজাতের ব্যবহারঃ</b><br />হাঁস-মুরগির পালক দ্বারা খেলার সামগ্রী, ঝাড়- ইত্যাদি এবং রক্ত ও নাড়িভূড়ি প্রক্রিয়াজাত করে পশু-পাখীর খাদ্য তৈরীর জন্য আলাদা শিল্প গড়ে উঠেছে।</p>
                <p className="card-text"><b>৭. জ্বালানী সাশ্রয়েঃ</b><br />পোল্ট্রির বর্জ্য এবং লিটার ব্যবহার করে বায়োগ্যাস উৎপাদন করা সম্ভব যা ব্যবহারের মাধ্যমে জ্বালানী সাশ্রয় করে জাতীয় অর্থনীতিতে ভূমিকা রাখা যায়।</p>
                <p className="card-text"><b>৮. আয়ের উৎসঃ</b><br />আদিকাল থেকে গ্রাম বাংলার মহিলারা বাড়তি আয়ের উৎস হিসাবে হাঁস-মুরগি পালন করে আসছে।</p>

            </div>
        </div >


    );
};

export default MurgiInfo;