import React, { useState } from 'react'

function ThemeToggle() {
    const [isDarkMode,setisDarkmode]=useState(false);
    const toggleTheme=()=>{
        setisDarkmode(!isDarkMode);
    }
    const themeStyle={
        backgroundColor:isDarkMode?'#383C3F':'#fff',
        color:isDarkMode ? '#fff' : '#383C3F',
        minHeight: '100vh',
        padding:'20px'
    }

    const buttonStyle={
        padding:'10px',
        backgroundColor: isDarkMode ? '#fffb00ff' : '#a3d7e7ff',
        borderRadius:'2px',
        border:'none',
        color:'black',
        cursor:'pointer'
    }
  return (
    <div style={themeStyle}>
        <button style={buttonStyle} onClick={toggleTheme}>Switch to {isDarkMode?'Light theme🌙' : 'Dark Theme🌕'}</button> <br></br><br></br>
        <h1>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>Just the day before, our host had written of the challenges of writing short. In journalism–my friend’s chosen trade, and mostly my own, too–Mark Twain’s observation undoubtedly applies: “I didn’t have time to write a short letter, so I wrote a long one instead.” The principle holds across genres, in letters, reporting, and other writing. It’s harder to be concise than to blather. (Full disclosure, this blog post will clock in at a blather-esque 803 words.) Good writing is boiled down, not baked full of air like a souffl??. No matter how yummy souffl??s may be. Which they are. Yummy like a Grisham novel.

Lately, I’ve been noticing how my sentences have a tendency to keep going when I write them onscreen. This goes for concentrated writing as well as correspondence. (Twain probably believed that correspondence, in an ideal world, also demands concentration. But he never used email.) Last week I caught myself packing four conjunctions into a three-line sentence in an email. That’s inexcusable. Since then, I have tried to eschew conjunctions whenever possible. Gone are the commas, the and’s, but’s, and so’s; in are staccato declaratives. Better to read like bad Hemingway than bad Faulkner.

Length–as we all know, and for lack of a more original or effective way of saying it–matters. But (ahem), it’s also a matter of how you use it. Style and length are technically two different things.

Try putting some prose onscreen, though, and they mix themselves up pretty quickly. This has much to do with the time constraints we claim to feel in the digital age. We don’t have time to compose letters and post them anymore–much less pay postage, what with all the banks kinda-sorta losing our money these days–so we blast a few emails. We don’t have time to talk, so we text. We don’t have time to text to specific people, so we update our Facebook status. We don’t have time to write essays, so we blog.

I’m less interested by the superficial reduction of words–i.e. the always charming imho or c u l8r–than the genres in which those communications occur: blogs, texts, tweets, emails. All these interstitial communiques, do they really reflect super brevity that would make Twain proud? Or do they just reflect poorly stylized writing that desperately seeks a clearer form?

I rather think the latter. Clive Thompson wrote last month in the NYT Magazine that constant digital updates, after a day, can begin “to feel like a short story; follow it for a month, and it’s a novel.” He was right to see the bits as part of a larger whole. The words now flying through our digital pipes & ether more or less tend to resemble parts of bigger units, perhaps even familiar genres. But stories and novels have definite conclusions; they also have conventional lengths. Quick, how long is the conventional blog, when you add up all of its posts and comments? How long is the longest email thread you send back and forth on a single topic?

Most important: What exactly are we writing when we’re doing all of this writing? I won’t pretend to coin a whole new term here; I still think the best we can muster is a more fitting analogue. And if we must find an analogue in an existing literary unit, I propose the paragraph. Our constant writing has begun to feel like a neverending digital paragraph. Not a tight, stabbing paragraph from The Sun Also Rises or even a graceful, sometimes-slinking, sometimes-soaring paragraph from Absalom! Absalom!, I mean a convoluted, haphazard, meandering paragraph, something like Kerouac’s original draft of On the Road–only taped together by bytes. And 1 percent as interesting.

Paragraphs, particularly those that wrap from one page to the next, inherently possess a necessary suspension that tightens the reader’s focus yet breaks down the narrative into digestable sections. Just like emails or blogs or texts. The mental questions while reading all of these feel the same:

“Is this the last line or is there more?”</p>
    </div>
  )
}

export default ThemeToggle