import React from 'react';
import { Divider, Typography } from '@mui/material';
import mow from '../../../../../images/Agri-info/crops/Honey Bee_মৌ.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const MowChassInfo = () => {

    // dynamic title
    useDocumentTitle("মৌ চাষ");

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
                মৌ চাষ
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={mow} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p>কৃষিভিত্তিক বাংলাদেশে স্বল্প শ্রম ও স্বল্প পুঁজি সংবলিত কার্যক্রম গ্রহণের মাধ্যমে আত্মকর্মসংস্থান সৃষ্টি, বাড়তি আয়ের মাধ্যমে দারিদ্র্যবিমোচন, নারীর ক্ষমতায়ন, মৌ চাষের যন্ত্রপাতি সংশ্লিষ্ট কুটির শিল্পের সম্প্রসারণ, পুষ্টির উন্নয়ন, ফল ও ফসলের ফলন বৃদ্ধি এবং বাধ্যতামূলক বৃক্ষরোপণের মাধ্যমে পরিবেশের ভারসাম্যতা ও উন্নয়নে মৌ চাষ অনন্য। আধুনিক প্রযুক্তি প্রয়োগের মাধ্যমে মৌ চাষ কার্যক্রম গ্রহণে আগ্রহী লক্ষ জনগোষ্ঠীকে মৌ চাষে উদ্বুদ্ধকরণসহ অধিক মধু উৎপাদনের মধ্য দিয়ে দেশে খাঁটি মধুর চাহিদা পূরণ, সফল পরাগায়নের মাধ্যমে ফল ও ফসলের উৎপাদন বৃদ্ধি তথা দেশের আর্থসামাজিক অবস্থার উন্নয়নে অবদান রাখা সম্ভব।</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p className="card-text"><b>বাংলাদেশে মৌ চাষের ইতিহাস</b><br /> মৌমাছি সাধারণত বনে জঙ্গলে, গাছের ডালে, গাছের কোটরে, মাটির গর্তে, দালানের সুবিধামতো জায়গায় মৌচাক তৈরি করে থাকে। সুন্দরবনে মৌয়ালরা বাঘের ভয়কে তুচ্ছ করে মধু সংগ্রহ করে থাকে এভাবে অবৈজ্ঞানিক পন্থায় মধু সংগ্রহ করতে গিয়ে অনেক মৌমাছি ধ্বংস হয়ে যায়।</p>
                <p>বর্তমানে জ্ঞান-বিজ্ঞানের ক্রমোন্নতির সাথে সাথে অনেক কিছু সহজসাধ্য হয়েছে। প্রযুক্তি প্রয়োগের মাধ্যমে প্রাকৃতিক মৌমাছিকে পোষ মানানো সম্ভব হয়েছে। পৃথিবীর প্রায় অধিকাংশ দেশেই এখন কাঠের বাক্সে মৌমাছি পালন করা হয়েছে। এ ব্যবস্থায় প্রাকৃতিক পরিবেশ থেকে মৌ কলোনি সংগ্রহ করে বা কৃত্রিম উপায়ে বিভাজনের মাধ্যমে রানী উৎপাদন করে প্রযুক্তিগত এবং বিজ্ঞানসম্মত উপায়ে কাঠের তৈরি বাক্সে প্রতিপালন করা হয়।</p>
                <p className="card-text"><b> মৌমাছির পরিচিতি</b><br />
                    - মৌমাছি এক ধরনের  সামাজিক ও উপকারী পতঙ্গ;<br />
                    - সংঘবদ্ধভাবে রানী, শ্রমিক ও পুরুষ সমন্বয়ে একটি কলোনিতে বসবাস করে;<br />
                    - স্বভাবসিদ্ধভাবে প্রকৃতিতে বসবাস করে;<br />
                    - প্রধানত ফুল থেকে নেকটার ও পোলেন সংগ্রহ করে;<br />
                    - সময় ও ক্ষেত্র বিশেষ কচিপাতা, উদ্ভিদের কাণ্ড, মিষ্টি ফল এবং চিনিজাতীয় খাদ্যদ্রব্য থেকে মিষ্টি রস সংগ্রহ করে;<br />
                    - নেকটার অথবা মিষ্টি রস সংগ্রহ করে একটি নির্ধারিত প্রক্রিয়ার মাধ্যমে তাদের  তাৎক্ষণিক খাবার ও ভবিষ্যৎ সঞ্চয় হিসাবে মধু উৎপাদন করে;<br />
                    - সংগৃহীত পোলেন থেকে মৌমাছি বিশেষ করে অল্প বয়সের মৌমাছির প্রোটিন জাতীয় খাবারের চাহিদা পূরণ করে।</p>
                <p className="card-text"><b>মৌমাছির প্রকারভেদ</b><br />প্রকৃতিতে চার প্রকারের মৌমাছি পাওয়া যায়। সেগুলো হলো- অ্যাপিস মেলিফেরা, অ্যাপিস ডরসেটা, অ্যাপিস সেরানা ও অ্যাপিস ফ্লোরিয়া। তবে অ্যাপিস মেলিফেরা প্রজাতির চাষাবাদ আমাদের দেশের প্রেক্ষাপটে লাভজনক।</p>
                <p className="card-text"><b>অ্যাপিস  মেলিফেরার বৈশিষ্ট্য</b><br />
                    - ইউরোপ ও আফ্রিকা মহাদেশে উৎপত্তি;<br />
                    - আকারে বড় ও শান্ত প্রকৃতির;<br />
                    - অধিক মধু উৎপাদন ক্ষমতাসম্পন্ন (প্রতি কলোনিতে বছরে মধু উৎপাদন ক্ষমতা কমপক্ষে ৫০ কেজি) বাক্সে পোষ মানে এবং কখনই বাক্স বা কলোনি পরিত্যাগ করে না।</p>
                <p className="card-text"><b>পরাগায়নে মৌ চাষ</b><br />মৌমাছির মাধ্যমে সফল পরাগায়ন সম্ভব এটি সর্বজনস্বীকৃত। বিভিন্ন মধুফুল মৌসুমে মৌমাছি দ্বারা পরাগায়ত ফসলের ১০ থেকে ১৫ ভাগ উৎপাদন বৃদ্ধি পায় এবং উৎপাদিত বাড়তি ফসলের মূল্য মোট উৎপাদিত মধু ও মোমের মূল্যের ১০ থেকে ১৫ ভাগ বেশি। বাড়তি ফল ও ফসলের উৎপাদন বৃদ্ধিতে মৌচাষিদের পাশাপাশি কৃষককে উদ্বুদ্ধকরণের লক্ষ্যে বিভিন্ন মধুফুল মৌসুমে ভ্রাম্যমাণ মৌ খামার ও প্রদর্শনী কার্যক্রম পরিচালনা করা হচ্ছে। এতে অধিক মধু এবং ফল ও ফসলের উৎপাদন বৃদ্ধিতে মৌচাষি এবং কৃষক উভয়ই উপকৃত হবেন। বাড়তি ফল ও ফসলের উৎপাদনের ফলে দেশের জিডিপিতে আরও অবদান রাখা সম্ভব।</p>
                <p className="card-text"><b>মৌ চাষে সতর্কতা</b><br />মৌবাক্সে বসানোর আশপাশের জমিতে বালাইনাশক সব সময়ই বিকেলের পরে স্প্রে করা প্রয়োজন। না হলে বালাইনাশক প্রয়োগের কারণে মৌমাছি মারা যাবে।</p>








                <p className="card-text"><b>মৌ চাষের সুফল</b><br />
                    বাংলাদেশের বর্তমান আর্থসামাজিক প্রেক্ষাপটে মৌ চাষের উল্লেখযোগ্য সুফল নিম্নরূপ<br />
                    - নিয়মিত বিশুদ্ধ মধু সেবনের মাধ্যমে রোগ প্রতিরোধ;<br />
                    - বিশেষ বিশেষ রোগ নিরাময়;<br />
                    - বাড়তি আয়;<br />
                    - খাদ্যে পুষ্টিমান বৃদ্ধি ও উন্নয়ন;<br />
                    - মোম ব্যবহারের মাধ্যমে বহুবিধ প্রসাধনী ও ওষুধ শিল্পের উন্নয়ন;<br />
                    - স্বাদ ও রুচির দিক থেকে খাদ্যের মান উন্নয়ন;<br />
                    - কৃষিভিত্তিক কুটির শিল্পের উন্নয়ন;<br />
                    - দেশজ সম্পদের  ব্যবহারের মাধ্যমে জাতীয় অর্থনৈতিক উন্নয়নে অবদান;<br />
                    - বনজ সম্পদের উন্নয়ন, সম্প্রসারণ এবং পরিবেশে ভারসাম্য রক্ষা;<br />
                    - ফল ও ফসলের সফল পরাগায়নের মাধ্যমে উৎপাদন বৃদ্ধি;<br />
                    - আয়বর্ধক কর্মকাণ্ডর মাধ্যমে পারিবারিক সচ্ছলতা;<br />
                    - মৌ চাষের মাধ্যমে কর্মসংস্থান সৃষ্টি।</p>

            </div>
        </div >

    );
};

export default MowChassInfo;