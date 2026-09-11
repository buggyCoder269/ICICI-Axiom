import { Box, Divider, Link, Typography } from "@mui/material"
import LoginImage from "../../assets/Login-Image.svg";
import { centerFlex, columnFlex } from "../../utils/styles";
import ICICILogo from "../../assets/ICICI_Logo_BG.svg";
import IBMLogo from "../../assets/IBM Logo.svg";
import CustomCheckbox from "../../components/ui/Checkbox/Checkbox";
import CustomButton from "../../components/ui/Button/Button";
import CustomSnackbar from "../../components/ui/SnackBar/Snackbar";
import { useState } from "react";
import CustomTextField from "../../components/ui/TextField/TextField";

const Login = () => {
    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };

    return (
        <Box
            sx={{
                display: "flex",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            {/* Left Section */}
            <Box
                sx={{
                    width: "50%",
                    position: "relative",
                }}
            >
                <Box
                    component="img"
                    src={LoginImage}
                    alt="Underwriter reviewing an insurance form"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </Box>

            {/* Right Section */}
            <Box
                sx={{
                    width: "50%",
                    ...centerFlex,
                    position: "relative",
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        maxWidth: 350,
                        px: 4,
                        py: 2,
                        gap: 2.5,
                        ...columnFlex,
                    }}
                >
                    {/* ICICI Logo */}
                    <Box>
                        <Box
                            component="img"
                            src={ICICILogo}
                            alt="ICICI Life Logo"
                            sx={{ height: 60 }}
                        />
                        <Typography
                            variant="body1"
                            color="text.secondary"
                        >
                            Log in to access your account
                        </Typography>
                    </Box>

                    {/* Login Form */}
                    <Box
                        component="form"
                        // onSubmit={handleSubmit(onSubmit)}
                        sx={{
                            ...columnFlex,
                            gap: 1,
                        }}
                    >
                        {/* Username */}
                        <Box>
                            <Typography sx={{ mb: 1, fontSize: "12px" }}>
                                User ID
                                <Box component="span" sx={{ color: "#9A2529" }}>
                                    *
                                </Box>
                            </Typography>


                            <CustomTextField
                                fullWidth
                                placeholder="Enter your User ID"
                                autoComplete="username"
                            />
                        </Box>

                        {/* Password */}
                        <Box>
                            <Typography sx={{ mb: 1, fontSize: "12px" }}>
                                Password
                                <Box component="span" sx={{ color: "#9A2529" }}>
                                    *
                                </Box>
                            </Typography>

                            <CustomTextField
                                fullWidth
                                type="password"
                                placeholder="Enter your Password"
                                autoComplete="current-password"
                            />

                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{
                                    mt: 1,
                                    fontSize: "11px",
                                }}
                            >
                                It must be at least 8 characters
                                long and include letters and
                                numbers.
                            </Typography>
                        </Box>

                        {/* Remember Me */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent:
                                    "space-between",
                                ml: "0px"
                            }}
                        >
                            <CustomCheckbox
                                label="Remember me"
                            // checked={remember}
                            // onChange={(event) =>
                            //   setRemember(
                            //     event.target.checked,
                            //   )
                            // }
                            />
                        </Box>

                        {/* Login Button */}
                        <CustomButton
                            fullWidth
                            variant="contained"
                            sx={{ borderRadius: "50px" }}
                            type="submit"
                            disabled={status === "loading"}
                        >
                            {status === "loading"
                                ? "Signing in..."
                                : "Log In"}
                        </CustomButton>
                    </Box>

                    {/* Footer */}
                    <Box sx={{ textAlign: "center" }}>
                        <Divider sx={{ mb: 1 }} />

                        <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ fontSize: "11px" }}
                        >
                            © 2026 ICICI Life Insurance,&nbsp;
                            <Link href="#" underline="hover">
                                Privacy Policy
                            </Link>
                            &nbsp; | &nbsp;
                            <Link href="#" underline="hover">
                                Terms and Conditions
                            </Link>
                        </Typography>
                    </Box>
                </Box>

                {/* Bottom Branding */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                    }}
                >
                    <Typography variant="body2">
                        Powered by
                    </Typography>

                    <Box
                        component="img"
                        src={IBMLogo}
                        alt="IBM Logo"
                    />
                </Box>
            </Box>

            <CustomSnackbar
                open={snackbarOpen}
                message={""}
                severity="error"
                onClose={handleSnackbarClose}
                autoHideDuration={3000}
            />
        </Box>
    )
}

export default Login