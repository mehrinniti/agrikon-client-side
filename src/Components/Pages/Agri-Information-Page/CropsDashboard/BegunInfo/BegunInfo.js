import React from 'react';
import { Divider, Typography } from '@mui/material';
import begun from '../../../../../images/Agri-info/crops/Brinjal_বেগুন.jpg';
import useDocumentTitle from '../../../../../hooks/useDocumentTitle';

const BegunInfo = () => {

    // dynamic title
    useDocumentTitle("বেগুন");

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
                বেগুন
            </Typography>
            <Divider />

            <div className="card mt-4 mb-3 border-0 rounded-0">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={begun} className="img-fluid rounded-0 h-100" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-start ">
                            <p className="card-text fw-bold">মাটি</p>
                            <p className="card-text">হালকা বেলে থেকে ভারী এটেল মাটি অর্থাৎ প্রায় সব ধরনের মাটিতেই বেগুনের চাষ করা হয়। হালকা বেলে মাটি আগাম জাতের বেগুন চাষের জন্য উপযোগী। এই ধরণের মাটিতে বেগুন চাষ করতে হলে প্রচুর পরিমাণ জৈবসারসহ অন্যান্য সার ঘন ঘন প্রয়োগ করতে হবে। এটেঁল দো-আঁশ ও পলি দো-আঁশ মাটি বেগুন চাষের জন্য উপযোগী এবং এই মাটিতে বেগুনের ফলন বেশী হয়। বেগুন চাষের জন্য নির্বাচিত মাটি গভীর, উর্বর ও সুনিষ্কাশিত হওয়া প্রয়োজন।</p>

                            <p className="card-text fw-bold">বেগুনের জাত</p>
                            <p className="card-text">ভাল ফলন পেতে হলে উপযুক্ত জাত নির্বাচন করা একান্ত প্রয়োজন। বাংলাদেশে বেগুনের বহু জাত রয়েছে। এক জাত থেকে অন্যজাতে গাছের প্রকৃতি, ফলের রং, আকার, আকৃতি প্রভৃতি বিষয়ে বেশ পার্থক্য পরিলক্ষিত হয়। বাংলাদেশে প্রধানতঃ লম্বা ফল, গোলাকর ফল ও গোলাকার এই তিন ধরণের বেগুনের চাষ বেশী হয়ে থাকে। </p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='text-start pb-5'>
                <p>সব জাতকে মৌসুম ভিত্তিক দুই ভাবে ভাগ করা যেতে পারে, যেমন-শীতকালীন বেগুন ও বারমাসী বেগুন। শীতকালীন জাতের বেগুন রবি মৌসুমে চাষ করা হয় কারণ, এই জাতের বেগুন কেবলমাত্র রবি মৌসুমেই ফল দিতে পারে। আর বারমাসী বেগুন বছরের যে কোন সময় চাষ করা যেতে পারে। নিচে উল্লেখযোগ্য কয়েকটি জাতের পরিচিতি দেয়া হল-</p>
                <p><b>ইসলামপুরী- </b>এটি শীতকালীন জাত। এ জাতের গাছে ও ফলে কাঁটা নেই। গাছের উচ্চতা মাঝারি ধরনের ও শাখা প্রশাখাযুক্ত। পাতার রং বেগুনী সবুজ। ফল গোলাকার, কচি অবস্থায় গাঢ় বেগুনী, পরিপক্ক অবস্থায় সবুজাভ বেগুনী। তবে কোন কোন সময় ত্বকে সবুজ বর্ণের ছোপ থাকতে পারে। ফলের শাঁস মোলায়েম ও সুস্বাদু, বীজের সংখ্যা কম। প্রতিটি ফলের ওজন ২০০-৪০০ গ্রাম। গড়ন ফলন ৩৬ টন/হেক্টর। গাছ প্রতি গড় ফল ধরার সংখ্যা ১৩টি।</p>
                <p><b>খটখটিয়া- </b>শীতকালে চাষ উপযোগী জাত। গাছ উচ্চতায় ও বিস্তৃতিতে মাঝারি, পাতা মাঝারী চওড়া। ফল দন্ডাকার ও কালচে বেগুনী। ফল লম্বায় ১৬-২০ সেমি. ও বেড়ে ৩.৫০-৫.৫০ সেমি.। প্রতিটি ফলের ওজন ১০০-১২৫ গ্রাম। গড় ফলন ২৯ টন/হেক্টর।</p>
                <p><b>লাফফা- </b>শীতকালীন জাত ফলের রং বেগুনী এবং গোলাকার। ফলের উপরিভাগ সামান্য খাদালো। ময়মনসিংহের গফরগাঁও এলাকার একটি জনপ্রিয় জাত।</p>
                <p><b>ঈশ্বরদি ১- </b>প্রধানতঃ শীতকালীন জাত। তবে অন্যান্য সময়ও চাষ করলে কিছু ফলন পাওয়া যায়। গাছ কাটাময়, পাতা খাটো ও চওড়া ধরনের। ফল বড়, গোলাকার এবং রং সবুজ ও তার উপর হালকা ডোরা। ফলে বীজ খুব ও খুব সুস্বাদু নয়। এ জাতে পোকা মাকড়ের উপদ্রব খুব কম। প্রতিটি ফলের ওজন ১৫০-২৫০ গ্রাম।</p>
                <p><b>উত্তরা (বারি বেগুন ১)- </b>বাংলাদেশ কৃষি গবেষণা ইনষ্টিটিউট কর্তৃক উদ্ভাবিত একটি উন্নত জাত। শীতকাল এ বেগুন চাষের উপযুক্ত সময়। গাছের পাতা ও কাণ্ড হালকা বেগুনী এবং পাতার শিরাগুলো গাঢ় বেগুনী হয়। পাতার নীচের দিকে সামান্য নরম কাটা দেখা যায়। গাছ খাটো আকৃতির ও ছড়ানো হয়ে থাকে। প্রতি গুচেছ ৫-৬টি ফল ধরে। ফলের রং বেগুনী এবং ১৮-২০ সেমি. লম্বা। ফলের ত্বক খুব পাতলা, শাঁস মোলায়েম এবং খেতে সুস্বাদু। হেক্টর প্রতি গড়ে ৬৪ টন ফলন পাওয়া যায়। এ জাতটি ‘ঢলে পড়া’ নামক রোগ প্রতিরোধ করতে পারে। গাছ প্রতি গড়ে ১৯৫টি ফল ধরে।</p>
                <p><b>তাল বেগুন বা তল্লা বেগুন- </b>তাল বেগুন বা তল্লা বেগুন- গাছ উচ্চ, বিস্তৃতিতে কম, শাখা ও পাতার সংখ্যা কম। পাতা বড় ও চওড়া। ফল গোলাকার ও চ্যাপ্টাকৃতি। ফলের বেড় দৈর্ঘ্য অপেক্ষা বেশী। ফলের শাঁস মোলায়েম ও সুস্বাদু, বীজের সংখ্যা মধ্যম। প্রতিটি ফলের ওজন ২০০-৪০০ গ্রাম।</p>
                <p><b>নয়ন কাজল- </b>প্রধানতঃ শীতকালীন জাত। গাছের উচ্চতা মাঝারী ধরনের ও শাখা প্রশাখা যুক্ত। ফল বেলুনাকৃতি, লম্বা ২০ সেমি. পর্যন্ত হতে পারে, ফলের রং হালকা সবুজ, বোঁটার কাছে হালকা বেগুনী। চোখের কাজলের মত আচড় আছে। সম্ভবতঃ এ কারণে জাতটির নাম নয়ন কাজল। একটি অধিক ফলনশীল জাত, ফলে বীজের পরিমাণ কম, শাঁস মোলায়েম এবং খেতে সুস্বাদু। প্রতি ফলের ওজন ৩০০-৬০০ গ্রাম।</p>
                <p><b>কেজি বেগুন- </b>শীতকালীন জাত। গাছের উচ্চতা মাঝারি, পাতা চওড়া, ঢেউ খেলানো ফল বোঁটার দিক থেকে ক্রমান্বয়ে মোটা, অনেকটা লাউয়ের মত দেখতে হয়। ফলের রং হালকা সবুজ এবং গায়ে লম্বালম্বি হালকা আচড় আছে। বীজ অত্যন্ত কম, শাঁসালো, নরম এবং অত্যন্ত সুস্বাদু। বেগুন ভাজা, বেগুনী, চপ ইত্যাদি তৈরিতে এর জুড়ি নেই। উপযুক্ত পরিচর্যা পেলে প্রতিটি ফলের ওজন গড়ে ১ কেজি পর্যন্ত পাওয়া যায়। এ কারণে এ জাতটি এখন খুব জনপ্রিয় নয়।</p>
                <p><b>শিংনাথ- </b>একটি বারমাসী জাত। গাছ বেশ উঁচু, পাশেও অধিক, শাখা প্রশাখার সংখ্যা প্রচুর। পাতা সরু ধরনের। এর ফল সরু, লম্বায় প্রায় ৩০ সেমি. ও বেগুনী রংয়ের। বেগুনের মধ্যে বীজ মাঝারি সংখ্যক, খেতে সুস্বাদু। এই জাতের বেগুনের মধ্যে কতকগুলি উপজাত আছে, যেগুলি ফলের আকার, আকৃতি, বর্ণের দিক থেকে পরষ্পর থেকে ভিন্ন। প্রতিটি ফলের ওজন ৭৫-১৫০ গ্রাম। প্রতিটি গাছে গড়ে ৩৯ টি বেগুন ধরে এবং গড় ফলন ৩০ টন/হেক্টর।</p>
                <p><b>ঝুমকো- </b>গাছ খাটো, খুবই ফলনশীল জাত। ফল খাটো, সরু ও ৮-১০ সেমি. লম্বা। বেগুন গাছের গুচ্ছভাবে উৎপন্ন হয়। ফলের ত্বক খুব পাতলা ও শাঁস মোলায়েম। ডগা ও ফলের মাজরা পোকার আক্রমণ কম হয়।</p>
                <p><b>ডিম বেগুন- </b>একটি উচ্চ ফলনশীল বারমাসী জাত। এ জাতে পোকার উপদ্রব খুব কম হয়। ফল ধবধবে সাদা, আকৃতিতে প্রায় ডিমের মত। প্রতিটি ফলের ওজন ৪০-৬০ গ্রাম।</p>
                <p><b>মুক্তকেশী- </b>এটি বারমাসী জাত, আগষ্ট (মধ্য শ্রাবণ-মধ্য ভাদ্র) মাস থেকে বেগুন বাজারে বিক্রয়ের জন্য উঠানো যায়। গাছ মাঝারী আকৃতির, ফল উপবৃত্তাকার ও চকচকে বেগুনী। প্রতিটি বেগুনের ওজন ১৫০-২৫০ গ্রাম।</p>
                <p><b>শুকতারা- </b>বাংলাদেশ কৃষি গবেষণা ইনষ্টিটিউট কর্তৃক উদ্ভাবিত একটি হাইব্রিড জাত। সুফলা ও উত্তরা জাতের মধ্যে সংকরায়নের মাধ্যমে উদ্ভাবন করা হয়েছে। শ্রাবণ-ভাদ্র মাস চারা রোপণের উপযুক্ত সময়। ফল বেগুনী, গড়ে ১৯ সেমি. লম্বা ও বেড় ৪ সেমি.। উচ্চফলনশীল, প্রতিটি ফলের ওজন গড়ে ৬০ গ্রাম। প্রতি হেক্টরে গড়ে ৮০ টন ফলন পাওয়া যায়। সংকর জাতের কারণে এ জাতটি ঢলেপড়া নামক রোগ প্রতিরোধ করতে পারে। কৃষকদের জমিতে উৎপন্ন বীজ থেকে বীজ সংগ্রহ করে পরবর্তী বছর বেগুন চাষ করা যাবে না। প্রতি বছরই বীজ নতুন করে সংগ্রহ করতে হবে।</p>
                <p><b>তারাপুরী (বারি বেগুন ২)- </b>বাংলাদেশ কৃষি গবেষণা ইনষ্টিটিউট কর্তৃক উদ্ভাবিত হাইব্রিড জাত। ইসলামপুরী ও উত্তরা জাতের মধ্যে সংকরায়নের মাধ্যমে উদ্ভাবিত, শ্রাবণ-ভাদ্র মাস চারা রোপণের উপযুক্ত সময়। ফল গাঢ় বেগুনী, প্রায় ১৬ সেমি. লম্বা ও বেড় ৬ সেমি.। উচ্চফলনশীল, প্রতিটি ফলের ওজন গড়ে ৯০ গ্রাম, হেক্টর প্রতি গড় ফলন ৮০ টন। এ জাতটি ব্যাকটেরিয়াজনিত ঢলে পড়া রোগ প্রতিরোধ করতে পারে। উৎপাদনের জন্য প্রতি বছর নতুন করে বীজ সংগ্রহ করতে হবে।</p>
                <p><b>বিজয়- </b>একটি হাইব্রিড জাত, সারা বৎসর চাষ করা যায়। গাছ ডালপালা বিশিষ্ট, সব শাখা প্রশাখায় বেগুন ধরে। ফল উপ গোলাকার, বেলুন আকৃতি, আকর্ষণীয় কালচে বেগুনী রং, বোঁটা সবুজ। ফলের ছাল পাতলা, খেতে সুস্বাদু। প্রচুর ফলন পাওয়া যায়। প্রতিটি বেগুনের গড় ওজন ১৭০ গ্রাম। চারা রোপণের ৪৫-৫০ দিন পর থেকে বেগুন সংগ্রহ করা যায়। অনেক দিন যাবত ফলতে থাকে। চাষের জন্য প্রতি বছর নতুন বীজ সংগ্রহ করতে হয়।</p>
                <p><b>চমক এফ১- </b>এটি একটি হাইব্রিড জাত। আষাঢ় থেকে পৌষ মাসের মধ্যে চারা রোপণ করতে হয়। চারা রোপণের ৫৫-৬০ দিন পর ফল ধরে। গাছ ও পাতা বড়, অনেক ডালপালা, বেগুন লম্বায় প্রায় ২৫ সেন্টিমিটার। পুতি গাছে ১৫-২০ কেজি ফল ধরে। কাজল এফ১- বেগুন গোল, রং কালো, প্রতিটি বেগুনের ওজন ৩০০-৪০০ গ্রাম, গাছ বড় ও ঝোপালো।</p>

                <p className="card-text fw-bold">চাষের মৌসুম</p>
                <p className="card-text">বাংলাদেশের জলবায়ুতে বছরের যে কোন সময়ই বেগুনের চাষ করা যেতে পারে। তবে রবি মৌসুমে বেগুন চাষ করলে ফলন খরিপ মৌসুমের চেয়ে পাওয়া যায়। রবি মৌসুম অর্থাৎ শীতকালের জন্য সাধারণতঃ আগষ্ট থেকে অক্টোবর পর্যন- বীজ বোনার উপযুক্ত সময়। খরিপ মৌসুম অর্থাৎ বর্ষাকালীন বেগুনের জন্য জানুয়ারি থেকে মে মাস পর্যন- বীজ বোনার উপযুক্ত সময়। রবি মৌসুমে চাষের জন্য যে কোন জাতের বেগুন লাগানো যেতে পারে, কিন' খরিপ মৌসুমে চাষের জন্য বারমাসী জাতসমূহ লাগাতে হবে।</p>

                <p className="card-text fw-bold">চারা তৈরি</p>
                <p className="card-text">বেগুন চাষের জন্য প্রথমে বীজতলায় চারা করে তা মূল জমিতে রোপণ করতে হয়। বীজতলা এমন স্থানে তৈরী করতে হবে যেখানে বৃষ্টির পানি দাঁড়াবে না অর্থাৎ সুনিষ্কাশিত হতে হবে, সর্বদা আলো-বাতাস পায় অর্থাৎ ছায়ামুক্ত হতে হবে।</p>
                <p className="card-text">বীজতলা তৈরির জন্য মাটি গভীরভাবে (অন্তত ২০ সেন্টিমিটার) চাষ দিতে হবে। বীজতলায় মাটি হতে হবে উর্বর। উর্বরতা কম থাকলে জৈব সার ও সামান্য পরিমাণ ফসফেট জাতীয় সার ব্যবহার করা যেতে পারে। প্রতি বর্গ মিটার বীজতলার জন্য ০.১০ ঘন মিটার পচা গোবর সার ও ৩০ গ্রাম টিএসপি সার ব্যবহার করা যেতে পারে। চাষের পর সম্পূর্ণ জমিকে কয়েকটি ছোট ছোট বীজতলাতে ভাগ করে নিতে হবে। প্রতিটি বীজতলা দৈর্ঘ্যে ৩-৫ ঘন মিটার, প্রসে' এক মিটার ও পাশ থেকে ১৫ সেন্টিমিটার ফাঁকা জায়গা রাখা উচিত। পাশাপাশি দুটো বীজতলার মধ্যে ৫০-৬০ সেন্টিমিটার ফাঁকা জায়গা রাখা উচিত। এ ফাঁকা জায়গা থেকে মাটি নিয়ে বীজতলা উঁচু করে নিতে হবে। অল্প সংখ্যক চারা উৎপাদনের জন্য বীজতলা হিসেবে কাঠের বাক্স, প্লাস্টিকের ট্রে অথবা বড় টব ব্যবহার করা যেতে পারে।</p>
                <p className="card-text">প্রতি হেক্টর জমিতে বেগুন চাষের জন্য ২৫০-৩০০ গ্রাম বীজের প্রয়োজন হয়। ৩ মিত্ম১মি পরিমাপের বীজ তলার জন্য ১৪-১৬ গ্রাম বীজ লাগে। তাহলে ২৫০-৩০০ গ্রাম বীজের জন্য উল্লেখিত মাপের ১৬-২০ টি বীজতলার প্রয়োজন হবে। ১ গ্রাম বেগুন বীজে প্রায় ২০০-২৫০ টি বীজ থাকে এবং শতকরা ৭৫-৮০টি বীজ অঙ্কুরিত হয়। বীজতলাতে বীজ ছিটিয়ে বা সারি করে বোনা যেতে পারে। সারিতে বুনলে সারি থেকে সারির দূরত্ব ৫ সেমি. দিতে হবে। বীজ বোনার পর বীজতলার মাটি হালকা করে চেপে দিতে হবে। বীজতলাতে চারার দূরত্ব ২-৩ সেমি. হলে চারার বৃদ্ধি ভাল হয়। বীজ বোনার পর ঝাঝরি দিয়ে হালকা ভাবে পানি ছিটিয়ে সেচ দেওয়া দরকার। প্রয়োজন হলে, শুকনা খড় বা পলিথিন শীট বা বস্তা দিয়ে বীজতলা ঢেকে দেওয়া যেতে পারে। গ্রীষ্মকালে সকালে ও সন্ধ্যায় হালকাভাবে সেচ দেওয়া প্রয়োজন। চারা গজানোর পর ২-৩ দিন অন-র হালকা সেচ দেওয়া উচিত।</p>

                <p className="card-text fw-bold">জমি তৈরি ও চারা রোপণ</p>
                <p className="card-text">সাধারণতঃ মাঠের জমি তৈরির জন্য ৪-৫ বার চাষ ও মই দিয়ে মাটি ঝুরঝুরে করে নিতে হবে। ৩৫-৪৫ দিন বয়সের চারা রোপণের উপযোগী হয়। এ সময় চারাতে ৫-৬টি পাতা গজায় এবং চারা প্রায় ১৫ সেমি. লম্বা হয়। বেগুনের চারার বয়স একটু বেশী হলেও লাগানো যেতে পারে। প্রয়োজনে দু’মাস পর্যন্ত চারা বীজতলার রেখে দেওয়া যায়। চারা তোলার সময় যাতে শিকড় নষ্ট না হয সেজন্য চারা তোলার ১-২ ঘন্টা আগে বীজতলায় পানি দিয়ে মাটি ভিজিয়ে নিতে হবে। চারা রোপণ দূরত্ব জাত, মাটির উর্বরতা ও উৎপাদন মৌসুমের উপর নির্ভর করে। সাধারণতঃ বড় আকারের বেগুনের জাতের ক্ষেত্রে ৯০ সেমি. দূরে সারি করে সারিতে ৬০ সেমি. ব্যবধানে চারা লাগানো যেতে পারে এবং ক্ষুদ্রাকার জাতের ক্ষেত্রে ৭৫ সেমি. সারি করে সারিতে ৫০ সেমি. ব্যবধানে চারা লাগানো যেতে পারে। জমিতে লাগানোর পর পরই যাতে চারা শুকিয়ে না যায় সে জন্য সম্ভব হলে বিকালের দিকে চারা লাগানো উচিত।</p>

                <p className="card-text fw-bold">সার প্রয়োগ</p>
                <p className="card-text">বেগুন মাটি থেকে প্রচুর পরিমাণে খাদ্য উপাদান শোষণ করে। এজন্য বেগুনের সন্তোষজনক উৎপাদন সার ব্যতীত সম্ভব নয়। সারের পরিমাণ মাটির উর্বরতা শক্তির উপর নির্ভর করে। বেগুন চাষের জন্য হেক্টর প্রতি নিম্ন লিখিত পরিমাণে সার সুপারিশ করা যেতে পারে। প্রথম কিস্তি সার চারা লাগানোর ১০-২৫ দিন পর, দ্বিতীয় কিস্তি ফল ধরা আরম্ভ হলে এবং তৃতীয় ফল তোলার মাঝামাঝি সময়ে দিতে হবে। জমিতে রস না থাকলে সার প্রয়োগের পর পরই সেচ দিতে হবে।</p>

                <p className="card-text fw-bold">পোকামাকড় ব্যবস্থাপনা</p>
                <p className="card-text">বেগুনের সবচেয়ে ক্ষতিকর পোকা হল বেগুনের ডগা ও ফল ছিদ্রকারী পোকা। কোন কোন এলাকায় ক্ষুদ্র লাল মাকড় প্রধান শত্রু। এছাড়া কাঁটালে পোকা বা ইপলাকনা বিট্‌ল, জাব পোকা, ছাতরা পোকা, বিছা পোকা, পাতা মোড়ানো পোকা, থ্রিপস, কাটুই পোকা ইত্যাদি বেগুনের ক্ষতি করে থাকে। আইপিএম পদ্ধতিতে এসব পোকা নিয়ন্ত্রণের ব্যবস্থা নিতে হবে।</p>

                <p className="card-text fw-bold">রোগ ব্যবস্থাপনা</p>
                <p className="card-text">এ দেশে বেগুনের ঢলে পড়া ও গোড়া পচা দু’টি মারাত্মক রোগ। প্রায় বেগুন ক্ষেতেই এ রোগ দেখা যায়। ফল পচা রোগেও অনেক বেগুন নষ্ট হয়। বীজতলায় ড্যাম্পিং অফ রোগ চারার মড়ক সৃষ্টি করে। এ ছাড়া মোজেইক, ক্ষুদে পাতা, শিকড়ে গিঁট ইত্যাদি রোগও বেগুন ফসলের যথেষ্ট ক্ষতি করে থাকে।</p>

                <p className="card-text fw-bold">ফল সংগ্রহ ও ফলন</p>
                <p className="card-text">ফল সম্পূর্ণ পরিপক্ক হওয়ার পূর্বেই সংগ্রহ করতে হবে। ফল যখন পূর্ণ আকার প্রাপ্ত হয় অথচ বীজ শক্ত হয় না তখন ফল সংগ্রহ করার উপযুক্ত হয়। সংগ্রহের সময় ফলের ত্বক উজ্জ্বল ও চকচকে থাকবে। অধিক পরিপক্ক হলে ফল সবুজাভ হলুদ অথবা তামাটে রং ধারণ করে এবং শাঁস শক্ত ও স্পঞ্জের মত হয়ে যায়। অনেকে হাতের আঙুলের চাপ দিয়ে ফল সংগ্রহের উপযুক্ত কিনা তা নির্ধারণ করতে পারেন। এক্ষেত্রে দুই আঙুলের সাহায্যে চাপ দিলে যদি বসে যায় এবং চাপ তুলে নিলে পূর্বাবস্থায় ফিরে আসে তবে বুঝতে হবে বেগুন কচি রয়েছে আর চাপ দিলে যদি নরম অনুভূত হয়, অথচ বসবে না এবং আঙ্গুলের ছাপ থাকে তাহলে বুঝতে হবে সংগ্রহের উপযুক্ত হয়েছে। বেশী কচি অবস্থায় ফল সিকি ভাগ সংগ্রহ করলে ফলের গুণ ভাল থাকে, তবে ফলন কম পাওয়া যায়। ফলের বৃদ্ধি থেকে শুরু করে পরিপক্ক পর্যায়ের কাছাকাছি পৌঁছানো পর্যন- বেগুন খাওয়ার উপযুক্ত থাকে। সাধারণতঃ ফুল ফোটার পর ফল পেতে গড়ে প্রায় ১ মাস সময় লাগে। জাত ভেদে হেক্টর প্রতি ১৭-৬৪ টন ফলন পাওয়া যায়।</p>


            </div>
        </div >

    );
};

export default BegunInfo;