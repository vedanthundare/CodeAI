import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import EventIcon from '@mui/icons-material/Event';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CodeIcon from '@mui/icons-material/Code';
import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import CoffeeIcon from '@mui/icons-material/Coffee';
import UploadIcon from '@mui/icons-material/Upload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

export default function HackathonTimeline() {
    return (
        <>
        <Timeline position="alternate" style={{padding: 0}}>
            {/* Day 1 */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="silver"
                >
                    9:00 AM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <EventIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Arrival & Networking</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Kickstart with participant networking.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    10:00 AM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <LightbulbIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Opening Ceremony</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Welcome speech & judge introductions.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    11:00 AM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <CodeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Problem Statements</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Announcement and Q&A session.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    1:00 PM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <CodeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Project Development</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Focused coding & project work.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    8:00 PM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <DinnerDiningIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Dinner Break</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Recharge with a meal.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    9:00 PM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <NightlightRoundIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Preliminary Round</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Project review & evaluation begins.</Typography>
                </TimelineContent>
            </TimelineItem>

            {/* Day 2 */}
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    12:30 AM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <NightlightRoundIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Overnight Work</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Continuous project development.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    7:00 AM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <CoffeeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Breakfast</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Refuel for the final stretch.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    8:00 AM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <UploadIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Final Submission</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Refinement and project submission.</Typography>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="silver"
                >
                    1:00 PM
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <CheckCircleIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                    <Typography variant="h6" sx={{ fontFamily: "'MyCustomFont2'" }}>Conclusion</Typography>
                    <Typography sx={{ fontFamily: "'MyCustomFont2'" }}>Hackathon officially ends.</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
        </>
    );
}
