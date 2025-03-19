import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const PrizePool = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                background: "transparent",
                color: "white",
                p: { xs: 2, sm: 4, md: 6 },  // Responsive padding
            }}
        >
            <Card
                sx={{
                    width: "100%",
                    maxWidth: { xs: 350, sm: 600, md: 800 },  // Responsive card size
                    boxShadow: 10,
                    borderRadius: 4,
                    background: "linear-gradient(135deg, #0f3460, #1a1a2e)",
                    color: "#fff",
                    padding: { xs: "1.5rem", sm: "2rem", md: "3rem" }
                }}
            >
                <CardContent>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            mb: 2,
                            fontFamily: "'MyCustomFont2'",
                            fontSize: { xs: "1.3rem", sm: "2rem", md: "2.5rem", lg: "3rem" }
                        }}
                    >
                        🎯 Prize Pool
                    </Typography>

                    <Grid
                        container
                        spacing={2}
                        justifyContent="center"
                        alignItems="center"
                        direction={{ xs: "column", sm: "row" }}  // Column layout on small screens
                    >
                        <Grid item>
                            <EmojiEventsIcon
                                sx={{
                                    fontSize: { xs: 60, sm: 80, md: 100 },  // Responsive icon size
                                    color: "#FFD700"
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#FFD700",
                                    fontFamily: "'MyCustomFont2'",
                                    fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" }  // Responsive text size
                                }}
                            >
                                ₹ 100,000
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mt: 1,
                                    color: "#B0C4DE",
                                    fontFamily: "'MyCustomFont2'",
                                    fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" }
                                }}
                            >
                                (Cash Prizes + Goodies)
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default PrizePool;
